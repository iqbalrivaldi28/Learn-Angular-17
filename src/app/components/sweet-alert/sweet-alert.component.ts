import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sweet-alert',
  standalone: true,
  imports: [],
  templateUrl: './sweet-alert.component.html',
  styleUrl: './sweet-alert.component.scss',
})
export class SweetAlertComponent {
  title: string = 'Materi Sweet ALert: ';

  sweetAlert() {
    Swal.fire('Berhasil', 'Ini adalah Sweet Alert', 'success');
  }
}
