import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Story {
    id: number;

  title: string;
  author: string;
  views: number;
}

@Component({
  selector: 'app-stories',
  imports: [CommonModule],
  templateUrl: './stories.html',
  styleUrl: './stories.css',
})
export class Stories {
  stories: Story[] = [];
  loading = false;
  error: string | null = null;
  deletingIds = new Set<number>();

  // httpClient ~ axios
  constructor(private http: HttpClient) {}
  // genric type <T>
  ngOnInit() {
    this.loading = true;
    this.error = null;
    this.http.get<Story[]>('http://localhost:3000/stories').subscribe({
      next: (data: Story[]) => {
        this.stories = data;
        this.loading = false;
      },
      error: (err: unknown) => {
        this.error = 'Không thể tải dữ liệu.';
        console.error(err);
        this.loading = false;
      },
    });
  }
   deleteStory(id: number) {
    const confirmDelete = confirm('Bạn có chắc muốn xóa không?');
    if (!confirmDelete) return;

    this.deletingIds.add(id);
    this.http.delete<void>(`http://localhost:3000/stories/${id}`).subscribe({
      next: () => {
        this.stories = this.stories.filter((story) => story.id !== id);
        this.deletingIds.delete(id);
        alert('Xóa thành công');
      },
      error: (err: unknown) => {
        console.error(err);
        this.deletingIds.delete(id);
        alert('Xóa thất bại');
      },
    });
  }

  trackById(index: number, item: Story) {
    return item.id;
  }
}
