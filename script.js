// Chờ cho tất cả nội dung trang web được tải xong
document.addEventListener('DOMContentLoaded', () => {

    // --- Logic cho giỏ hàng (Cải tiến) ---
    const cartIcon = document.getElementById('cart-icon');
    const cartButtons = document.querySelectorAll('.add-to-cart-btn');
    let itemCount = 0; // Khởi tạo số lượng sản phẩm

    cartButtons.forEach(button => {
        button.addEventListener('click', () => {
            itemCount++; // Tăng số lượng
            // Cập nhật nội dung của thẻ a bao gồm cả icon
            cartIcon.innerHTML = `<i class="fas fa-shopping-cart"></i> (${itemCount})`;

            // (Tùy chọn) Hiển thị thông báo tinh tế hơn
            button.textContent = 'Đã thêm!';
            button.style.backgroundColor = '#28a745'; // Màu xanh lá
            setTimeout(() => {
                button.textContent = 'Thêm vào giỏ';
                button.style.backgroundColor = ''; // Trở lại màu cũ
            }, 2000); // Sau 2 giây
        });
    });

    // --- Logic cho Banner Pop-up ---
    const salePopup = document.getElementById('sale-popup');
    const closePopupButton = document.getElementById('close-popup');
    
    if (salePopup && closePopupButton) {
        // Hiển thị pop-up sau 3 giây
        setTimeout(() => {
            salePopup.style.display = 'flex';
        }, 3000);
    }

});