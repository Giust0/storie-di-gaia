<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500&display=swap" rel="stylesheet">
  <style>
    @media only screen and (max-width: 767px) {
  .detailed-events {
    display: none;
  }
}
@media only screen and (min-width: 768px) {
.popover {
	left: 10rem;
}
  .timeline {
    position: relative;
    padding-left: 20px;
  }
  .event-group {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 50px;
    color: white;
  }
  .event-group .content {
    width: 30%;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.3s ease;
  }

  .event-group .content:hover { 
	transform: scale(1.15);
  }
  .event-group .content h1 {
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 5px;
    margin-top: 0;
    font-weight: 500;
    text-align: center;
  }
  .event-group .content p {
    font-size: 14px;
    line-height: 24px;
    font-weight: 300;
    text-align: center;
  }
  .event-group .image-container {
    width: 175px;
    height: 105px;
    border-radius: 5px;
    overflow: hidden;
    margin-bottom: 10px;
  }
  .event-group .image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
  </style>
  <title>Responsive Timeline</title>
</head>
<body style="margin: 0; padding: 0; box-sizing: border-box; font-family: 'Montserrat', sans-serif; background-color: #111;">
  <p>L'<b>Era delle Guerre</b> rappresenta uno dei periodi più <b>turbolenti e drammatici</b> della storia su Gaia, caratterizzato da conflitti e avvenimenti che hanno rimodellato intere civiltà e culture. In questa era sono ambientate le campagne di gioco attualmente in corso e quelle già completate. La timeline qui di seguito rappresenta uno sguardo d'insieme sugli avvenimenti più importanti.</p>
  <p style="text-align: center">
  <img src="./Assets/T-Era-Guerre.png" />
  <div class="detailed-events">
  </p>
  <h2>Gli eventi nel dettaglio</h2>
  <p>Nel caso si abbia necessità di approfondire uno degli eventi è possibile consultare il paragrafo seguente, che descrive brevemente ognuno degli avvenimenti della timeline, seguendo un ordine strettamente cronologico.</p>
  
  <div style="min-height: 100vh; width: 100%; display: flex; align-items: center; justify-content: center;">
    <div style="width: 80%; height: auto; max-width: 800px; margin: 0 auto;" class="timeline">
      <div class="event-group">
      <a href="/Personaggi/Personaggi Non Giocanti/Dorton Mareril" style="display: contents;">
        <div class="content">
          <p style="margin-top: 0px; margin-bottom: 0px;"><b>730 p.A.</b></p>
          <div class="image-container">
            <img src="../Assets/Banner Home Light.jpg" style="margin: 0px;" alt="Event 3 Image">
          </div>
          <p style="font-size: 15px;"><b>Morte di Dorton Mareril</b></p>
          <p style="margin-top: 0px;">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        </a>
        <div class="content">
          <p style="margin-top: 0px; margin-bottom: 0px;"><b>565 p.A.</b></p>
          <div class="image-container">
            <img src="https://via.placeholder.com/60" style="margin: 0px;" alt="Event 2 Image">
          </div>
          <p><b>Inizio Guerra delle Due Querce</b></p>
          <p style="margin-top: 0px;">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div class="content">
          <p style="margin-top: 0px; margin-bottom: 0px;"><b>535 p.A.</b></p>
          <div class="image-container">
            <img src="https://via.placeholder.com/60" style="margin: 0px;" alt="Event 2 Image">
          </div>
          <p><b>Fine Guerra delle Due Querce</b></p>
          <p style="margin-top: 0px;">Descrizione breve del secondo evento.</p>
        </div>
        <div class="content">
          <p style="margin-top: 0px; margin-bottom: 0px;"><b>135 p.A.</b></p>
          <div class="image-container">
            <img src="https://via.placeholder.com/60" style="margin: 0px;" alt="Event 2 Image">
          </div>
          <p><b>Dawn of the Child</b></p>
          <p style="margin-top: 0px;">Descrizione breve del terzo evento.</p>
        </div>
        <div class="content">
          <p style="margin-top: 0px; margin-bottom: 0px;"><b>100 p.A.</b></p>
          <div class="image-container">
            <img src="https://via.placeholder.com/60" style="margin: 0px;" alt="Event 4 Image">
          </div>
          <p><b>Le Due Querce</b></p>
          <p style="margin-top: 0px;">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div class="content">
          <p style="margin-top: 0px; margin-bottom: 0px;"><b>100 p.A.</b></p>
          <div class="image-container">
            <img src="https://via.placeholder.com/60" style="margin: 0px;" alt="Event 4 Image">
          </div>
          <p><b>Evento Sincronico - Soli in Terra</b></p>
          <p style="margin-top: 0px;">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div class="content">
          <p style="margin-top: 0px; margin-bottom: 0px;"><b>100 p.A.</b></p>
          <div class="image-container">
            <img src="https://via.placeholder.com/60" style="margin: 0px;" alt="Event 4 Image">
          </div>
          <p><b>Behind the Lion's Claw</b></p>
          <p style="margin-top: 0px;">???</p>
        </div>
        <div class="content">
          <p style="margin-top: 0px; margin-bottom: 0px;"><b>Anno 0</b></p>
          <div class="image-container">
            <img src="https://via.placeholder.com/60" style="margin: 0px;" alt="Event 4 Image">
          </div>
          <p><b>La saga di Eshmund</b></p>
          <p style="margin-top: 0px;">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div class="content">
          <p style="margin-top: 0px; margin-bottom: 0px;"><b>50 d.A.</b></p>
          <div class="image-container">
            <img src="https://via.placeholder.com/60" style="margin: 0px;" alt="Event 4 Image">
          </div>
          <p><b>Cinquant'anni dopo</b></p>
          <p style="margin-top: 0px;">???</p>
        </div>
        <div class="content">
          <p style="margin-top: 0px; margin-bottom: 0px;"><b>238 d.A.</b></p>
          <div class="image-container">
            <img src="https://via.placeholder.com/60" style="margin: 0px;" alt="Event 4 Image">
          </div>
          <p><b>The Ultragnomic Jump</b></p>
          <p style="margin-top: 0px;">???</p>
        </div>
      </div>
    </div>
  </div>
  </div>
</body>
</html>