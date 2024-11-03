import { Connection } from '@/configs/db.config'
import { Service } from './entities/service.entity'
import { Job } from './entities/job.entity'

async function seed() {
  await Connection.initialize()
  const servicesData = [
    {
      name: 'Thiết kế công trình, hệ thống liên quan',
      description: 'Các dịch vụ thiết kế công trình và hệ thống liên quan',
      jobs: [
        'Thiết kế công trình dân dụng',
        'Khảo sát phân tích yêu cầu',
        'Lên phương án thiết kế',
        'Thiết kế kết cấu và an toàn',
        'Thiết kế Hệ thống MEP',
        'Tính toán và dự toán ngân sách',
        'Lập hồ sơ thiết kế',
        'Thiết kế công trình công nghiệp',
        'Lập kế hoạch thiết kế',
        'Thiết kế kiến trúc và bố trí nhà xưởng',
        'Tính toán công năng và bảo đảm an toàn lao động',
        'Lập hồ sơ thiết kế',
        'Thiết kế hạ tầng kỹ thuật',
        'Nghiên cứu hiện trạng và quy hoạch khu vực',
        'Lên phương án thiết kế',
        'Thiết kế hệ thống giao thông',
        'Thiết kế hệ thống cấp thoát nước và xử lý nước thải',
        'Thiết kế hệ thống cấp điện và chiếu sáng công cộng',
        'Thiết kế hệ thống PCCC và an toàn',
        'Đánh giá tác động môi trường',
        'Lập hồ sơ và bản thiết kế'
      ]
    },
    {
      name: 'Tư vấn',
      description: 'Các dịch vụ tư vấn cho khách hàng',
      jobs: [
        'Tư vấn thiết kế',
        'Khảo sát phân tích yêu cầu',
        'Thực hiện khảo sát địa hình và địa chất',
        'Tư vấn và thiết kế theo nhu cầu mong muốn của khách',
        'Thiết kế sơ bộ',
        'Thiết kế kỹ thuật cơ sở hạ tầng',
        'Dự toán chi phí',
        'Tư vấn hỗ trợ pháp lý',
        'Lập báo cáo',
        'Tổng thầu tư vấn cho các dự án có vốn đầu tư trong nước và ngoài nước tại Việt Nam',
        'Lập kế hoạch và khởi tạo dự án',
        'Lập hồ sơ thiết kế và phê duyệt',
        'Quản lý đấu thầu và lựa chọn nhà thầu',
        'Quản lý và giám sát thi công',
        'Quản lý tài chính, dự án toán',
        'Kiểm định, nghiệm thu',
        'Hỗ trợ giám sát sau khi bàn giao',
        'Báo cáo tư vấn cho chủ đầu tư'
      ]
    },
    {
      name: 'Thẩm tra',
      description: 'Các dịch vụ thẩm tra hồ sơ thiết kế và dự toán',
      jobs: [
        'Thẩm tra thiết kế công trình',
        'Kiểm tra hồ sơ thiết kế',
        'Đánh giá khả năng kỹ thuật và an toàn của thiết kế',
        'Kiểm tra phù hợp với quy định và tiêu chuẩn',
        'Phân tích kinh tế - kỹ thuật',
        'Thẩm tra tính bền vững và môi trường',
        'Kiểm tra mức độ an toàn của công trình',
        'Lập báo cáo thẩm tra',
        'Thẩm tra dự toán',
        'Kiểm tra hồ sơ dự toán',
        'Kiểm tra sự phù hợp giữa khối lượng thiết kế và khối lượng dự toán.',
        'Kiểm tra đơn giá và cấu thành chi phí',
        'Xác định giá trị dự toán xây dựng công trình phù hợp với thực tế.',
        'Thẩm tra chi phí quản lý và chi phí khác',
        'Lập báo cáo thẩm tra dự toán'
      ]
    },
    {
      name: 'Lập tài liệu',
      description: 'Các dịch vụ lập tài liệu cho dự án',
      jobs: [
        'Lập tổng dự toán các dự án các công trình',
        'Thu thập xem xét hồ sơ',
        'Tính toán khối lượng công việc cho các hạng mục',
        'Xác định đơn giá cho từng hạng mục',
        'Tính chi phí xây dựng trực tiếp',
        'Tính chi phí chung và chi phí dự phòng',
        'Tính chi phí lắp đặt và hoàn thiện',
        'Tính chi phí thiết kế, thẩm tra và giám sát',
        'Lập báo cáo tổng dự toán',
        'Lập bản đăng ký đạt tiêu chuẩn môi trường',
        'Thu thập thông tin và đánh giá',
        'Phân tích các tác động môi trường',
        'Xây dựng các biện pháp giảm tác động',
        'Lập bảng tổng hợp dữ liệu và đánh giá rủi ro môi trường',
        'Lập kế hoạch giám sát và quản lý',
        'Soạn bản đăng ký'
      ]
    }
  ]

  for (const serviceData of servicesData) {
    const service = new Service()
    service.name = serviceData.name
    service.description = serviceData.description

    const serviceRepo = Connection.getRepository(Service)
    const savedService = await serviceRepo.save(service)

    for (const jobName of serviceData.jobs) {
      const job = new Job()
      job.name = jobName
      job.service = savedService

      const jobRepo = Connection.getRepository(Job)
      await jobRepo.save(job)
    }
  }

  console.log('Dữ liệu đã được khởi tạo thành công!')
  await Connection.destroy()
}

seed().catch((error) => console.log(error))
