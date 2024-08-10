<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500&display=swap" rel="stylesheet">
  <style>
    @media only screen and (min-width: 768px) {
      .timeline {
        position: relative;
        padding-left: 20px; /* Padding to make space for the lines */
      }
      .timeline ul {
        padding: 0;
        list-style: none;
        margin: 0;
      }
      .timeline ul li {
        position: relative;
        margin-bottom: 50px;
        color: white;
        display: flex;
        align-items: center;
      }
      .timeline ul li .content {
        width: 52%;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
      }
      .timeline ul li .content:nth-child(even) {
        border-radius: 20px 20px 20px 0;
      }
      .timeline ul li .content:nth-child(odd) {
        border-radius: 20px 20px 0 20px;
      }
      .timeline ul li .arrow {
        width: 15%;
        padding: 10px;
        display: flex;
        justify-content: center;
        position: relative;
        top: 200px;
      }
      .timeline ul li .arrow img {
        width: 100%;
      }
      .timeline ul li .image-container {
        position: relative;
        width: 249px;
        height: 140px;
        border-radius: 5px;
        overflow: hidden;
        margin-bottom: 10px;
      }
      .timeline ul li .image-container img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      /* Piccole linee verticali tra gli eventi */
      .timeline ul li:not(:last-child)::after {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        width: 2px;
        height: 20px;
        background-color: gray;
      }
    }
  </style>
  <title>Responsive Timeline</title>
</head>
<body style="margin: 0; padding: 0; box-sizing: border-box; font-family: 'Montserrat', sans-serif; background-color: #111;">
  <p style="text-align: center">
  <img src="./Assets/Banner Home Light.jpg" />
  </p>
  <div style="min-height: 100vh; width: 100%; display: flex; align-items: center; justify-content: center; padding: 100px 0;">
    <div style="width: 80%; height: auto; max-width: 800px; margin: 0 auto;" class="timeline">
      <ul>
        <li style="left:30%">
          <div class="arrow">
            <img src="../Assets/Arrow-Left.png" alt="Arrow Left">
          </div>
          <div class="content" style="display: flex; flex-direction: column; align-items: flex-end;">
            <div class="image-container">
              <img src="../Assets/Banner Home Light.jpg" alt="Event 3 Image">
            </div>
            <h3 style="font-size: 12px; font-weight: 300; margin-bottom: 10px; margin-top:0px; letter-spacing: 2px;">20th May, 2010</h3>
            <h1 style="font-weight: 500; font-size: 25px; line-height: 30px; margin-bottom: 0px; margin-top:0px;">Heading 3</h1>
            <p style="font-size: 16px; line-height: 30px; font-weight: 300; text-align: end!important">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore.</p>
          </div>
        </li>
        <li style="right:0%">
          <div class="content">
            <div class="image-container">
              <img src="https://via.placeholder.com/60" alt="Event 2 Image">
            </div>
            <h3 style="font-size: 12px; font-weight: 300; margin-bottom: 10px; margin-top:0px; letter-spacing: 2px;">20th May, 2010</h3>
            <h1 style="font-weight: 500; font-size: 25px; line-height: 30px; margin-bottom: 10px; margin-top:0px;">Heading 2</h1>
            <p style="font-size: 16px; line-height: 30px; font-weight: 300;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore.</p>
          </div>
          <div class="arrow">
            <img src="../Assets/Arrow-Right.png" alt="Arrow Right">
          </div>
        </li>
        <li style="left:30%">
          <div class="arrow">
            <img src="../Assets/Arrow-Left.png" alt="Arrow Left">
          </div>
          <div class="content" style="display: flex; flex-direction: column; align-items: flex-end;">
            <div class="image-container">
              <img src="https://via.placeholder.com/60" alt="Event 3 Image">
            </div>
            <h3 style="font-size: 12px; font-weight: 300; margin-bottom: 10px; margin-top:0px; letter-spacing: 2px;">20th May, 2010</h3>
            <h1 style="font-weight: 500; font-size: 25px; line-height: 30px; margin-bottom: 0px; margin-top:0px;">Heading 3</h1>
            <p style="font-size: 16px; line-height: 30px; font-weight: 300; text-align: end!important">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore.</p>
          </div>
        </li>
        <li style="right:0%">
          <div class="content">
            <div class="image-container">
              <img src="https://via.placeholder.com/60" alt="Event 4 Image">
            </div>
            <h3 style="font-size: 12px; font-weight: 300; margin-bottom: 10px; margin-top:0px; letter-spacing: 2px;">20th May, 2010</h3>
            <h1 style="font-weight: 500; font-size: 25px; line-height: 30px; margin-bottom: 10px; margin-top:0px;">Heading 4</h1>
            <p style="font-size: 16px; line-height: 30px; font-weight: 300;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore.</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</body>
</html>
