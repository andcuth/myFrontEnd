import { Component, OnInit } from '@angular/core';
import {ViewChild} from '@angular/core';

import { User } from '../_models/user';

import { MatMenuTrigger } from '@angular/material';
import { Router } from '@angular/router';

import {AuthLoginService} from '../service/auth-login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
