import React from "react";
import "./Introduction.css";

import { Container } from "react-bootstrap";

function Introduction() {
  return (
    <Container>
      <div className="intro2">
        <h1> ENGLISH</h1>
        <h1 style={{ "font-size": "40px" }}>
          Here at Vaccinatelah, we encourage you to go for your vaccination for
          the purpose of keeping you and your family safe against the dealy
          Covid-19 virus. Please look at the youtube videos to get a better
          understanding on why you should be vaccinated and the benefits that
          come with it.
        </h1>
      </div>

      <div className="intro3">
        <h1> Malay </h1>
        <h1 style={{ "font-size": "40px" }}>
          Di sini, di Vaccinatelah, kami menggalakkan anda untuk pergi untuk
          vaksinasi anda untuk tujuan penyimpanan anda dan keluarga anda selamat
          daripada virus Covid-19. Sila lihat video youtube suapaya dapat
          pemahaman yang lebih dalam atas mengapa anda harus diberi vaksin dan
          faedah yang ada dengannya
        </h1>
      </div>

      <div className="intro4">
        <h1> Indian </h1>
        <h1 style={{ "font-size": "40px" }}>
          இங்கே தடுப்பூசியில், வைத்திருக்கும் நோக்கத்திற்காக உங்கள்
          தடுப்பூசிக்கு செல்ல நாங்கள் உங்களை ஊக்குவிக்கிறோம் நீங்கள் மற்றும்
          உங்கள் குடும்பத்தினர் சமாளிக்கும் கோவிட் -19 வைரஸிலிருந்து பாதுகாப்பாக
          இருக்கிறோம். தயவுசெய்து யூடியூப் வீடியோக்களைப் பாருங்கள் tp பற்றி
          நன்கு புரிந்து கொள்ளுங்கள் நீங்கள் ஏன் தடுப்பூசி போட வேண்டும் மற்றும்
          அதனுடன் வரும் நன்மைகள்
        </h1>
      </div>

      <div className="intro5">
        <h1> Chinese </h1>
        <h1 style={{ "font-size": "40px" }}>
          在 Vaccinatelah，我们鼓励您接种疫苗以保持 您和您的家人可以安全地抵御
          COVID-19 病毒。 请查看 youtube 视频，以便更好地了解
          为什么您应该接种疫苗以及随之而来的好处
        </h1>
      </div>
    </Container>
  );
}

export default Introduction;
