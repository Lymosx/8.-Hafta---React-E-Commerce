import React from 'react'
import { NavLink } from 'react-router-dom'

export default function AboutUs() {
    return (

        <>
            <br /><br />
            <h1>MADEO: E-Ticarette Yenilik ve Güven</h1>
            <br />
            <p>Hoş geldiniz! MADEO, dijital ticaretin sınırlarını zorlayan, müşteri memnuniyetini ön planda tutan bir e-ticaret platformudur. MADEO.com adresinde bulabileceğiniz geniş ürün yelpazesi, güvenilir alışveriş deneyimi ve yenilikçi yaklaşımıyla tanınan bir markadır.</p>
            <br /><br />
            <h1>Biz Kimiz?</h1>
            <br />
            <p>MADEO, 2010 yılında kurulan bir e-ticaret girişimidir. Kuruluşumuzdan beri, müşterilerimize kaliteli ürünleri uygun fiyatlarla sunma misyonu ile hareket ediyoruz. Her geçen gün büyüyen ve gelişen global e-ticaret pazarında, MADEO olarak müşterilerimize en iyi alışveriş deneyimini yaşatmak için sürekli çaba sarf ediyoruz.</p>
            <br /><br />
            <h1>Misyonumuz</h1>
            <br />
            <p>MADEO'nun misyonu, müşterilere çeşitlilik, kalite ve güvenilirlik sunarak, dijital alışverişin keyifli ve güvenilir bir deneyim olmasını sağlamaktır. Müşteri memnuniyetini en üst düzeyde tutmayı amaçlayarak, teknolojik yeniliklere açık bir yaklaşım benimsemekte ve sürekli olarak ürün ve hizmet kalitemizi artırmaktayız.</p>
            <br /><br />
            <h1>Ürün ve Hizmetlerimiz</h1>
            <br />
            <p>MADEO, geniş bir ürün yelpazesi ile müşterilerine moda, elektronik, ev ve yaşam, güzellik ve daha birçok kategoride kaliteli ürünleri sunmaktadır. Ayrıca, kullanıcı dostu bir alışveriş platformu ve güvenli ödeme seçenekleri ile müşterilerimize rahat bir alışveriş deneyimi sunmaktayız.</p>
            <h1>Güvenlik ve Gizlilik</h1>
            <br />
            <p>Müşterilerimizin güvenliği ve gizliliği, MADEO için en üst düzeyde önceliktir. Gelişmiş güvenlik önlemleri ve veri koruma politikaları ile müşterilerimize tam bir güven duygusu yaşatıyoruz.</p>
            <h1>İletişim</h1>
            <br />
            <p>Siz değerli müşterilerimizle iletişim kurmak, geri bildirimlerinizi almak ve sorularınızı yanıtlamak için buradayız. İletişim kurmak için <NavLink className="nav-link btn btn-primary" to="/contactus">iletişim formumuzu</NavLink> 
                kullanabilir veya sosyal medya hesaplarımız üzerinden bize ulaşabilirsiniz.
            </p>
        </>
    )
}
