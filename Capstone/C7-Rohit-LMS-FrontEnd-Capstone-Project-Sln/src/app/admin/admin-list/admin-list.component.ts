import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../shared/service/admin.service';
import { Admin } from '../../shared/model/admin.model';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrl: './admin-list.component.css',
})
export class AdminListComponent implements OnInit {
  admins: Admin[] = [];
  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.loadAdmin();
  }

  loadAdmin(): void {
    this.adminService.getAdminData().subscribe((data) => {
      this.admins = data;
    });
  }

  deleteAdmin(id: string): void {
    confirm('Are you sure want to delete Admin');
    const superAdminPassword = 'Admin@123';
    const enteredPassword = prompt('Enter Password to Delete Admin');
    if (enteredPassword === superAdminPassword) {
      this.adminService.deleteAdmin(id).subscribe(() => {
        this.loadAdmin();
      });
      alert('Admin deleted successfully');
    } else {
      alert('Incorrect password');
    }
  }
}
