import { Component, ElementRef, EventEmitter, OnInit, Output, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public style: any
  constructor(private render: Renderer2, private element: ElementRef) { }

  ngOnInit(): void {
    //this.style = this.render.setStyle(this.element.nativeElement, "display", "none")
    this.style = "display:none"
  }

  





}
