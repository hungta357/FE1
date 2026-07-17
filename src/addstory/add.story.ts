import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface Story {
  id?: number;
  title: string;
  author: string;
  views: number;
}

@Component({
  selector: 'app-add-story',
  imports: [ReactiveFormsModule],
  templateUrl: './add.story.html',
  styleUrl: './add.story.css',
})
export class AddStory {
  // khai bao bien form
  addForm: FormGroup;

  // khoi tao form
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.addForm = this.fb.group({
      title: '',
    });
  }

  submitForm() {
    const title = this.addForm.value.title?.trim();
    if (!title) {
      alert('Vui lòng nhập tên truyện.');
      return;
    }

    const newStory: Story = {
      title,
      author: 'Unknown',
      views: 0,
    };

    this.http.post<Story>('http://localhost:3000/stories', newStory).subscribe({
      next: () => {
        alert('Thêm truyện thành công.');
        this.router.navigate(['/stories']);
      },
      error: (err: unknown) => {
        console.error(err);
        alert('Thêm truyện thất bại. Vui lòng thử lại.');
      },
    });
  }
}