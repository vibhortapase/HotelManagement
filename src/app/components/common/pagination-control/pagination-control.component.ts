import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination-control',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination-control.component.html',
  styleUrl: './pagination-control.component.css'
})
export class PaginationControlComponent implements OnChanges {
  @Input() data: any[] = [];             // Full data list
  @Input() pageSize: number = 10;        // Items per page
  @Output() paginated = new EventEmitter<any[]>(); // Emit sliced data

  currentPage: number = 1;
  totalPages: number = 1;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      this.currentPage = 1;
      this.updatePagination();
    }
  }

  updatePagination(): void {
    this.totalPages = Math.ceil(this.data.length / this.pageSize);
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const pageData = this.data.slice(startIndex, startIndex + this.pageSize);
    this.paginated.emit(pageData);
  }

goToPage(page: number | string): void {
  if (typeof page === 'number') {
    this.currentPage = page;
    this.updatePagination();
  }
}

  prevPage(): void {
    this.goToPage(this.currentPage - 1);
  }

  nextPage(): void {
    this.goToPage(this.currentPage + 1);
  }

  getPages(): (number | string)[] {
  const pages: (number | string)[] = [];
  const maxVisible = 5; // Number of page buttons to show
  const half = Math.floor(maxVisible / 2);

  if (this.totalPages <= maxVisible) {
    // Show all pages if total is small
    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i);
    }
  } else {
    let start = this.currentPage - half;
    let end = this.currentPage + half;

    if (start <= 1) {
      start = 1;
      end = maxVisible;
    } else if (end >= this.totalPages) {
      start = this.totalPages - maxVisible + 1;
      end = this.totalPages;
    }

    if (start > 1) {
      pages.push(1);
      if (start > 2) pages.push('...');
    }

    for (let i = start; i <= end && i <= this.totalPages; i++) {
      pages.push(i);
    }

    if (end < this.totalPages) {
      if (end < this.totalPages - 1) pages.push('...');
      pages.push(this.totalPages);
    }
  }

  return pages;
}
}
