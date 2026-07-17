import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  name = 'Nguyen Van A';
  age = 25;

  constructor() {}

  // Thêm hàm xử lý sự kiện click vào đây
  handleClick() {
    alert("Bạn đã click button");
  }

  // method cũ (có thể giữ lại hoặc xóa)
  deleteProduct() {}
}