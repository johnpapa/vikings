import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Villain } from '../../core';
import { openCloseAnimation } from '../../core/animations';
import { VillainService } from '../villain.service';

@Component({
  selector: 'vk-villains',
  templateUrl: './villains.component.html',
  styleUrls: ['./villains.component.scss'],
  animations: [openCloseAnimation],
  })
export class VillainsComponent implements OnInit {
  selected: Villain;

  selectedVillain: Villain;

  villains$: Observable<Villain[]>;

  constructor(private villainService: VillainService) {
    this.villains$ = villainService.entities$;
  }

  ngOnInit() {
    this.getVillains();
  }

  add(villain: Villain) {
    this.villainService.add(villain);
  }

  clear() {
    this.selected = null;
  }

  close() {
    this.selected = null;
  }

  delete(villain: Villain) {
    this.villainService.delete(villain.id);
    this.close();
  }

  enableAddMode() {
    this.selected = <any>{};
  }

  getVillains() {
    this.villainService.getAll();
    this.close();
  }

  select(villain: Villain) {
    this.selected = villain;
  }

  update(villain: Villain) {
    this.villainService.update(villain);
  }
}
