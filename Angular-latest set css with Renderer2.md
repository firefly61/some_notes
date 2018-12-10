
 index.html

    <div #child></div>

 component.ts

    @ViewChild('child')
            private el: ElementRef;
    constructor(
            private elementRef: ElementRef,
            private render: Renderer2
       ) {}

    ngAfterViewInit(){
        this.render.setStyle(this.el.nativeElement, 'height', '360px');
    }



