import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-poster-line',
  templateUrl: './poster-line.component.html',
  styleUrls: ['./poster-line.component.css']
})
export class PosterLineComponent implements OnInit {

  constructor() { }

  @Input() movies:any;
  @Input() title: string = '';

  ngOnInit(): void {
    // Cria um evento "click" para cada botão
    var botScroll: any = document.querySelectorAll(".position_btcx .button_cx");
    for(var x = 0; x < botScroll.length; x++){
      (function(x){
          botScroll[x].onclick = function(){
            moveScroll(x, cxAtiva().box_ativo, 1200);
          }
      })(x);
    }

    // Função que faz o scroll suave
    function scrollSuave(old: number, des: number, atu: number, ele: Element){
        var easeOutCubic = function (t: number) { return (--t)*t*t+1 };
        atu += 1; // move de 1 em 1 pixel. Aumentando o valor, irá aumentar a velocidade
        var ease = easeOutCubic(atu/100);
        var del = des-old;
        del *= ease;
        del += old;
        ele.scrollTo(del, 0);
        if(atu < 100){
          window.requestAnimationFrame(function (){
            scrollSuave(old, des, atu, ele);
          });
        }
    }

    // Função para buscar e retornar a galeria ativa
    function cxAtiva(){
      var ele: any = document.querySelectorAll(".conteudocaixas");
      for(var x = 0; x < ele.length; x++){
          if (ele[x].parentNode.style.display == "block") break;
      }

      return {
          box_ativo: x, // retorna a galeria visível (ativa)
          img_width: ele[x].querySelector("img").offsetWidth // retorna a largura das imagens
      }
    }

    function moveScroll(idx: number, cca: number, wid: number){
      var ele = document.querySelectorAll(".conteudocaixas");
      var ccs = ele[cca];
      var ccs_s = ccs.scrollLeft;
      // idx == 1 significa que segundo botão foi clicado (para a direita)
      scrollSuave(ccs_s, idx == 1 ? wid+ccs_s : ccs_s-wid, 0, ccs);
    }
  }
}
