/* DESCRIZIONE:
Griglia 6x6,
ad ogni click (su ogni rettangolino) parte una richiesta AJAX che prende un numero random da 1 a 9 (primo end-point della API in slide).
Se il num ritornato è <= 5 il quadrato diventa giallo,
se è > di 5 il quadrato diventa verde.
Il numero ottenuto appare al centro del quadrato
BONUS: (ma solo se il resto è fatto)
se utente clicca 2 volte sullo stesso rettangolo lo mando a ca… gli dico che non si può;
generare dinamicamente la griglia dei quadrati;
Curo per bene l’output, creando un layout carino;
varie che vi vengono in mente per sperimentare;
 */


$(document).ready(function () {



  $(".box").click(function () {
    var element = this
    $.ajax({
      url: "https://flynn.boolean.careers/exercises/api/random/int",
      method: "GET",
      success: function (data) {
        if (data.response <= 5) {
          $(element).addClass("yellow")
          $("h1", element).html(data.response)
        } else {
          $(element).addClass("green")
          $("h1", element).html(data.response)
        }
      }
    });

  });





});