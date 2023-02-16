import { Component } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {
  user: User = {
    id: 0,
    user: '',
    image: '',
  };
  prodId: number = 0;

  constructor(
    private activatedroute: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.prodId = parseInt(this.activatedroute.snapshot.params['userId']);
    this.userService
      .getUserById(this.prodId)
      .subscribe((data: User) => (this.user = data));
  }
  goEdit(): void {
    this.router.navigate(['/users', this.prodId, 'edit']);
  }
  onBack(): void {
    this.router.navigate(['']);
  }
}
