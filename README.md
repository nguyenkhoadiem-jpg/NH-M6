<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GỬI TIẾT KIỆM ONLINE AN TOÀN CHO SINH VIÊN </title>
    <link rel="stylesheet" href="style.css">
    <style>
        .animated:hover {
            animation: bounce 0.5s infinite alternate;
        }

        @keyframes bounce {
            from {
                transform: translateY(0);
            }

            to {
                transform: translateY(-5px);
            }
        }
    </style>
    <script>
        window.addEventListener("DOMContentLoaded", function () {
            var links = document.querySelectorAll("nav ul li a");
            links.forEach(function (link) {
                link.addEventListener("mouseover", function () {
                    this.classList.add("animated");
                });
                link.addEventListener("mouseout", function () {
                    this.classList.remove("animated");
                });
            });
        });
    </script>
</head>

<body style="background-color: #57c6bf;">
    <div class="container">
        <header>
            <img src="https://png.pngtree.com/thumb_back/fh260/background/20220428/pngtree-money-saving-concept-account-background-image_1107561.jpg"
                width="100%">
        </header>
    </div>
    <section class="logo">
        <img src="logo.png" width="19%">
    </section>
    <nav>
        <ul>
            <li><a class="active animated" href="taikhoan1.html">
                    <h3>TÀI KHOẢN</h3>
                </a></li>
            <li><a href="">
                    <h3>SẢN PHẨM CHÍNH</h3>
                </a></li>
            <li><a href="">
                    <h3>TÍNH NĂNG THÔNG MINH</h3>
                </a></li>
            <li><a href="tinhlai1.html">
                    <h3>CÔNG CỤ TÍNH LÃI</h3>
                </a></li>
            <li><a href="tincongty.html">
                    <h3>TIN CÔNG TY</h3>
                </a></li>
            <li><a href="" class="animated">
                    <h3>ƯU ĐÃI</h3>
                </a></li>
        </ul>
    </nav>
    <section class="content">
        <div class="post">
            <div class="post-content">
                <div class="post-detail">
                    <h2>ĐẦU TƯ AN TOÀN BẰNG GỬI TIẾT KIỆM LÃI XUẤT HẤP DẪN</h2>
                    <p class="description">Với Con Heo Đất, bạn có thể làm giàu một cách bền vững bằng việc gửi tiết
                        kiệm với lãi suất hấp dẫn.
                    </p>
                    <button class="btn-post">ĐĂNG KÝ NGAY</button>
                    <form>
                        <div class="form-group">
                            <label for="fullname">Họ và tên:</label>
                            <input type="text" id="fullname" name="fullname" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Email:</label>
                            <input type="email" id="email" name="email" required>
                        </div>
                        <div class="form-group">
                            <label for="phone">Số điện thoại:</label>
                            <input type="tel" id="phone" name="phone" required>
                        </div>
                        <div class="form-group">
                            <label for="amount">Số tiền gửi:</label>
                            <input type="number" id="amount```
                    <div class=" form-group">
                            <label for="term">Kỳ hạn gửi:</label>
                            <select id="term" name="term" required>
                                <option value="1">1 tháng</option>
                                <option value="3">3 tháng</option>
                                <option value="6">6 tháng</option>
                                <option value="12">12 tháng</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="agreement">
                                <input type="checkbox" id="agreement" name="agreement" required>
                                Tôi đồng ý với các điều khoản và điều kiện
                            </label>
                        </div>
                        <button type="submit">Đăng ký</button>
            </div>
    <footer>
        <p>Bản quyền &copy; 2023 Con Heo Đất By Nhóm 6</p>
    </footer>
