import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { SuccessComponent } from '../../components/toasts/success/success.component';
import { ErrorComponent } from '../../components/toasts/error/error.component';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector) { }


    success(message: string, duration: number = 10000) {
      const toastFactory = this.componentFactoryResolver.resolveComponentFactory(SuccessComponent);
      const componentRef = toastFactory.create(this.injector);
      componentRef.instance.message = message;
      this.appRef.attachView(componentRef.hostView);
  
      const domElem = (componentRef.hostView as any).rootNodes[0] as HTMLElement;
      document.body.appendChild(domElem);
  
      const timeoutId = setTimeout(() => {
        this.removeToast(domElem, componentRef);
      }, duration);
  
      componentRef.instance.onClose.subscribe(() => {
        clearTimeout(timeoutId);
        this.removeToast(domElem, componentRef);
      });
    }

    error(message: string, duration: number = 10000) {
      const toastFactory = this.componentFactoryResolver.resolveComponentFactory(ErrorComponent);
      const componentRef = toastFactory.create(this.injector);
      componentRef.instance.message = message;
      this.appRef.attachView(componentRef.hostView);
  
      const domElem = (componentRef.hostView as any).rootNodes[0] as HTMLElement;
      document.body.appendChild(domElem);
  
      const timeoutId = setTimeout(() => {
        this.removeToast(domElem, componentRef);
      }, duration);
  
      componentRef.instance.onClose.subscribe(() => {
        clearTimeout(timeoutId);
        this.removeToast(domElem, componentRef);
      });
    }

    private removeToast(domElem: HTMLElement, componentRef: any) {
      document.body.removeChild(domElem);
      this.appRef.detachView(componentRef.hostView);
      componentRef.destroy();
    }
}
