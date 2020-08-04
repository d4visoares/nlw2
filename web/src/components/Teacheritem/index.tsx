import React from 'react'
import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem() {
   return (
      <article className="teacher-item">
         <header>
            <img src="https://media-exp1.licdn.com/dms/image/C4D03AQF7cpcccFnS7Q/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=XP4pKsYxkMxeAjIo_tlbUMmElbFBSVln_CCu4L0wQsk" alt="Davi Soares" />
            <div>
               <strong>Davi Soares</strong>
               <span>Matemática</span>
            </div>
         </header>

         <p>
            Entusiasta por números e algumas letras... Vive para a matemática.
                  <br /><br />
                  Um professor muito renomado, 100% de certeza de aprendizado e qualidade no ensino, acredite que dessa vez você irá aprender bhaskara!
               </p>

         <footer>
            <p>
               Preço/Hora
                     <strong>R$ 80,00</strong>
            </p>
            <button>
               <img src={whatsAppIcon} alt="Whatsapp" />
                     Entrar em contato
                  </button>
         </footer>
      </article>
   )
}

export default TeacherItem;