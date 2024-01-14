import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { MemberDTO } from 'src/app/Models/member.dto';
import { MemberService } from 'src/app/Services/member.service';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/Services/toast.service';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-members-manage',
  templateUrl: './members-manage.component.html',
  styleUrls: ['./members-manage.component.scss'],
})
export class MembersManageComponent implements OnInit {
  miembros!: MemberDTO[];

  nombreMiembro: UntypedFormControl;

  constructor(
    private memberService: MemberService,
    private router: Router,
    private toastService: ToastService
  ) {
    this.nombreMiembro = new UntypedFormControl('');

    this.cargarMiembros();
  }

  ngOnInit() {
    this.nombreMiembro.valueChanges.subscribe(() => {
      this.cargarMiembros();
    });
  }

  private async cargarMiembros(): Promise<void> {
    const filtroMiembro: string = this.nombreMiembro.value;
    await this.memberService
      .getMembers(filtroMiembro)
      .then((miembros) => {
        this.miembros = Object.assign([], miembros.data);
      })
      .catch((resp) => {
        this.toastService.mostrarMensaje('Error al cargar los miembros', false);
      });
  }

  actualizarMiembro = (idMiembro: number): void => {
    this.router.navigateByUrl('/admin/miembro/' + idMiembro);
  };

  borrarMiembro = async (idMiembro: number): Promise<void> => {
    if (confirm('¿Seguro que deseas borrar este miembro?')) {
      await this.memberService
        .deleteMember(idMiembro)
        .then(() => {
          this.cargarMiembros();
          this.toastService.mostrarMensaje(
            'Miembro borrado correctamente',
            true
          );
        })
        .catch((resp) => {
          this.toastService.mostrarMensaje('Error al borrar el miembro', false);
        });
    }
  };
}
