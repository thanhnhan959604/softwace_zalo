
        document.addEventListener('DOMContentLoaded', function() {
            // Lấy các phần tử cần thiết bằng ID
            const selectSupport = document.getElementById('inputSupport');
            const ialoOAInputs = document.getElementById('ialoOAInputs');
            const dateAuthentic = document.getElementById('dateAuthentic')

            // Lấy các input con để quản lý thuộc tính 'required' và xóa giá trị
            const oaBusinessNameInput = document.getElementById('oaBusinessName');
            const dateAuthenticInput = document.getElementById('dateAuthenticInput')

            // Hàm để cập nhật trạng thái hiển thị của các input liên quan đến ialo OA
            // và quản lý thuộc tính 'required'
            function updateOAInputsVisibility() {
                // Kiểm tra nếu giá trị được chọn là 'ialoOA'
                if (selectSupport.value === 'ialoOA') {
                    // Hiển thị khối các input bằng cách loại bỏ lớp 'd-none'
                    ialoOAInputs.classList.remove('d-none');
                    dateAuthentic.classList.remove('d-none');
                    // Đặt thuộc tính 'required' cho input
                    oaBusinessNameInput.setAttribute('required', 'required');
                    dateAuthenticInput.setAttribute('required', 'required');
                } 
                else {
                    // Ẩn khối các input bằng cách thêm lớp 'd-none'
                    ialoOAInputs.classList.add('d-none');
                    dateAuthentic.classList.add('d-none');
                    // Xóa thuộc tính 'required' khỏi input Tên doanh nghiệp OA
                    oaBusinessNameInput.removeAttribute('required');
                    dateAuthenticInput.setAttribute('required');
                    
                    // Tùy chọn: Xóa giá trị của các input khi chúng bị ẩn
                    // Điều này giúp tránh việc gửi dữ liệu cũ khi người dùng thay đổi lựa chọn
                    oaBusinessNameInput.value = '';
                    dateAuthenticInput.value = '';
                }
            }

            // Đăng ký sự kiện 'change' (thay đổi) cho thẻ select
            // Mỗi khi người dùng chọn một giá trị mới, hàm updateOAInputsVisibility sẽ được gọi
            selectSupport.addEventListener('change', updateOAInputsVisibility);

            // Gọi hàm một lần khi trang được tải hoàn chỉnh
            // Điều này đảm bảo trạng thái hiển thị đúng nếu trang được tải lại
            // và select đã có một giá trị được chọn (ví dụ: từ lịch sử trình duyệt)
            updateOAInputsVisibility();
        });
// Khởi tạo datepicker
$('#dateAuthenticInput').datepicker({
    format: 'dd/mm/yyyy', // Định dạng ngày tháng
    autoclose: true,     // Tự động đóng sau khi chọn ngày
    language: 'vi'       // Sử dụng gói ngôn ngữ tiếng Việt
});

