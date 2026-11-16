/**
 * YerliFlix - Azərbaycan Kino Kataloqu
 * Əsas Tətbiq Məntiqi (Modular & Vanilla JS)
 */

(function () {
  'use strict';

  // ==========================================================================
  // 1. DÖVLƏT VƏ SABİTLƏR (STATE & CONSTANTS)
  // ==========================================================================
  const STORAGE_KEY = 'yerliflix_my_list_ids';

  // 36 Filmin Tam Ehtiyat Məlumatı (Həm fetch, həm də birbaşa file:/// üçün 100% zəmanət)
  const EMBEDDED_FILMS = [
    {
      id: 1,
      title: "O olmasın, bu olsun",
      year: 1956,
      genre: "Musiqili Komediya",
      collection: "Klassiklər",
      director: "Hüseyn Seyidzadə",
      cast: ["Əliağa Ağayev", "Arif Mirzəquliyev", "Tamara Gözəlova"],
      description: "Gənc Sərvər və Gülnazın sevgisinə mane olmağa çalışan varlı tacir Məşədi İbadın başına gələn gülməli hadisələrdən bəhs edir. Üzeyir Hacıbəyovun eyniadlı operettası əsasında çəkilmiş ilk rəngli Azərbaycan bədii filmidir.",
      sourceUrl: "https://az.wikipedia.org/wiki/O_olmas%C4%B1n,_bu_olsun_(film,_1956)",
      youtubeUrl: "https://www.youtube.com/watch?v=mZTbGUGk7Rc",
      youtubeId: "mZTbGUGk7Rc",
      poster: "https://img.youtube.com/vi/mZTbGUGk7Rc/hqdefault.jpg",
      isFeatured: false
    },
    {
      id: 2,
      title: "Arşın mal alan",
      year: 1965,
      genre: "Musiqili Komediya",
      collection: "Klassiklər",
      director: "Tofiq Tağızadə",
      cast: ["Həsən Məmmədov", "Leyla Şıxlinskaya", "Hacımurad Yegizarov"],
      description: "Gənc tacir Əsgər evlənmək istədiyi qızı əvvəlcədən görüb tanımaq üçün arşınmalçı libasına girərək həyətləri gəzir. Klassik musiqi və incə yumorla zəngin olan ekran əsəri dünya kinosunda da böyük rəğbət qazanıb.",
      sourceUrl: "https://az.wikipedia.org/wiki/Ar%C5%9F%C4%B1n_mal_alan_(film,_1965)",
      youtubeUrl: "https://www.youtube.com/watch?v=HRrs3pW_1ok",
      youtubeId: "HRrs3pW_1ok",
      poster: "https://img.youtube.com/vi/HRrs3pW_1ok/hqdefault.jpg",
      isFeatured: false
    },
    {
      id: 3,
      title: "Bəyin oğurlanması",
      year: 1985,
      genre: "Komediya",
      collection: "Klassiklər",
      director: "Ceyhun Mirzəyev, Vaqif Mustafayev",
      cast: ["Həsənağa Turabov", "Səyavuş Aslan", "Yaşar Nuri", "Nəsibə Zeynalova"],
      description: "Kəndə toy haqqında film çəkməyə gələn yaradıcı heyət ssenarinin cansız olduğunu görüb real hadisələr yaratmaq qərarına gəlir. Nəticədə çəkiliş qrupu özləri də bilmədən həqiqi sevgi macərasının və kənd toyunun bir parçasına çevrilirlər.",
      sourceUrl: "https://az.wikipedia.org/wiki/B%C9%99yin_o%C4%9Furlanmas%C4%B1_(film,_1985)",
      youtubeUrl: "https://www.youtube.com/watch?v=2auKCopLedM",
      youtubeId: "2auKCopLedM",
      poster: "https://img.youtube.com/vi/2auKCopLedM/hqdefault.jpg",
      isFeatured: false
    },
    {
      id: 4,
      title: "Yol əhvalatı",
      year: 1980,
      genre: "Komediya",
      collection: "Klassiklər",
      director: "Teymur Bəkirzadə",
      cast: ["Səyavuş Aslan", "Yaşar Nuri", "Həmidə Ömərova", "Vaxtanq Kikabidze"],
      description: "Şəhərdə çalışan gənc sürücü Mustafa kənddəki sevgilisinə qovuşmaq və işlərini yoluna qoymaq üçün çətin sınaqlardan keçir. Film sovet dövrünün bürokratik əngəllərini və insan münasibətlərini kəskin satira ilə təqdim edir.",
      sourceUrl: "https://az.wikipedia.org/wiki/Yol_%C9%99hvalat%C4%B1_(film,_1980)",
      youtubeUrl: "https://www.youtube.com/watch?v=QJWHSuzBa6Q",
      youtubeId: "QJWHSuzBa6Q",
      poster: "https://img.youtube.com/vi/QJWHSuzBa6Q/hqdefault.jpg",
      isFeatured: false
    },
    {
      id: 5,
      title: "Qayınana",
      year: 1978,
      genre: "Komediya",
      collection: "Klassiklər",
      director: "Hüseyn Seyidzadə",
      cast: ["Nəsibə Zeynalova", "İnarə Quliyeva", "Fuad Poladov"],
      description: "Sərt və tələbkar qayınana Cənnət xanım gəlini Sevdaya gün vermədiyi üçün oğlu Ayaz ailəsini qorumaq naminə dostları ilə maraqlı oyun qurur. Evə gətirilən uydurma ikinci gəlin Cənnət xanımın bütün xasiyyətini dəyişməyə məcbur edir.",
      sourceUrl: "https://az.wikipedia.org/wiki/Qay%C4%B1nana_(film,_1978)",
      youtubeUrl: "https://www.youtube.com/watch?v=lLvdW9Ry5_s",
      youtubeId: "lLvdW9Ry5_s",
      poster: "https://img.youtube.com/vi/lLvdW9Ry5_s/hqdefault.jpg",
      isFeatured: false
    },
    {
      id: 6,
      title: "Əhməd haradadır?",
      year: 1963,
      genre: "Komediya",
      collection: "Klassiklər",
      director: "Adil İsgəndərov",
      cast: ["Səyavuş Şəfiyev", "Töhfə Əzimova", "Nəsibə Zeynalova", "Lütfəli Abdullayev"],
      description: "Valideynlərinin razılığı olmadan evlənmək istəməyən gənc Əhməd kənddən çıxıb şəhərə yollanır və ailəsi onu axtarmağa başlayır. Axtarış zamanı baş verən təsadüflər gənclərin elə əvvəldən bir-birini seçdiyini üzə çıxarır.",
      sourceUrl: "https://az.wikipedia.org/wiki/%C6%8Fhm%C9%99d_haradad%C4%B1r%3F_(film,_1963)",
      youtubeUrl: "https://www.youtube.com/watch?v=-Y1JmAZeUMA",
      youtubeId: "-Y1JmAZeUMA",
      poster: "https://img.youtube.com/vi/-Y1JmAZeUMA/hqdefault.jpg",
      isFeatured: false
    },
    {
      id: 7,
      title: "Uşaqlığın son gecəsi",
      year: 1968,
      genre: "Dram",
      collection: "Klassiklər",
      director: "Arif Babayev",
      cast: ["Ənvər Həsənov", "Səyavuş Şəfiyev", "Məlik Dadaşov"],
      description: "Məktəbi yeni bitirən Murad həyatın böyük məsuliyyətləri ilə üz-üzə qalaraq ilk dəfə müstəqil qərarlar verməli olur. İçərişəhər mühitində çəkilən film gənclik, dürüstlük və mənəvi seçimlər haqqında səmimi hekayə danışır.",
      sourceUrl: "https://az.wikipedia.org/wiki/U%C5%9Faql%C4%B1%C4%9F%C4%B1n_son_gec%C9%99si_(film,_1968)",
      youtubeUrl: "https://www.youtube.com/watch?v=aSX1AO1zF6Q",
      youtubeId: "aSX1AO1zF6Q",
      poster: "https://img.youtube.com/vi/aSX1AO1zF6Q/hqdefault.jpg",
      isFeatured: false
    },
    {
      id: 8,
      title: "Gün keçdi",
      year: 1971,
      genre: "Dram",
      collection: "Klassiklər",
      director: "Arif Babayev",
      cast: ["Həsən Məmmədov", "Leyla Şıxlinskaya"],
      description: "Uşaqlıq dostları Oqtay və Əsmər illər sonra Bakıda yenidən qarşılaşaraq keçmiş xatirələri və yarımçıq qalmış hissləri xatırlayırlar. Poetik atmosferi və dərin dialoqları ilə seçilən ekran əsəri Azərbaycan kinosunun incilərindəndir.",
      sourceUrl: "https://az.wikipedia.org/wiki/G%C3%BCn_ke%C3%A7di_(film,_1971)",
      youtubeUrl: "https://www.youtube.com/watch?v=596lOCYdiaA",
      youtubeId: "596lOCYdiaA",
      poster: "https://img.youtube.com/vi/596lOCYdiaA/hqdefault.jpg",
      isFeatured: false
    },
    {
      id: 9,
      title: "Şərikli çörək",
      year: 1969,
      genre: "Müharibə",
      collection: "Klassiklər",
      director: "Şamil Mahmudbəyov",
      cast: ["Kamran Rəcəbli", "Tuna Namazova", "Əliağa Ağayev"],
      description: "İkinci Dünya müharibəsinin son günlərində arxa cəbhədə yaşayan balaca Vaqifin çörək talonu itirməsi ilə başlayan çətin mübarizəsi təsvir olunur. Film müharibənin uşaqların gözü ilə görünən acı həqiqətlərini və insan mərhəmətini əks etdirir.",
      sourceUrl: "https://az.wikipedia.org/wiki/%C5%9E%C9%99rikli_%C3%A7%C3%B6r%C9%99k_(film,_1969)",
      youtubeUrl: "https://www.youtube.com/watch?v=5gdvxyP6f1E",
      youtubeId: "5gdvxyP6f1E",
      poster: "https://img.youtube.com/vi/5gdvxyP6f1E/hqdefault.jpg",
      isFeatured: false
    },
    {
      id: 10,
      title: "Axırıncı aşırım",
      year: 1971,
      genre: "Tarixi",
      collection: "Klassiklər",
      director: "Kamil Rüstəmbəyov",
      cast: ["Adil İsgəndərov", "Həsən Məmmədov", "Məlik Dadaşov"],
      description: "Sovet hakimiyyətinin ilk illərində kənddə yaranan qarşıdurmanı qansız həll etmək istəyən Abbasqulu bəy Şadlinski köhnə dostu Kərbəlayı İsmayılla üz-üzə gəlir. Güclü aktyor oyunu və gərgin süjet xətti filmi tarixi dram janrının zirvəsinə qaldırır.",
      sourceUrl: "https://az.wikipedia.org/wiki/Ax%C4%B1r%C4%B1nc%C4%B1_a%C5%9F%C4%B1r%C4%B1m_(film,_1971)",
      youtubeUrl: "https://www.youtube.com/watch?v=wF6meCztIlE",
      youtubeId: "wF6meCztIlE",
      poster: "https://img.youtube.com/vi/wF6meCztIlE/hqdefault.jpg",
      isFeatured: false
    },
    {
      id: 11,
      title: "Ögey ana",
      year: 1958,
      genre: "Dram",
      collection: "Klassiklər",
      director: "Həbib İsmayılov",
      cast: ["Nəcibə Məlikova", "Ceyhun Mirzəyev", "Fateh Fətullayev"],
      description: "Anasını itirmiş balaca İsmayıl atasının yeni evləndiyi Dilarə xanımı əvvəlcə qəbul etmək istəmir və ona soyuq davranır. Lakin Dilarənin fədakarlığı və səmimi sevgisi zamanla uşağın qəlbindəki buzları əridir.",
      sourceUrl: "https://az.wikipedia.org/wiki/%C3%96gey_ana_(film,_1958)",
      youtubeUrl: "https://www.youtube.com/watch?v=Js9RX9k5VnI",
      youtubeId: "Js9RX9k5VnI",
      poster: "https://img.youtube.com/vi/Js9RX9k5VnI/hqdefault.jpg",
      isFeatured: false
    },
    {
      id: 12,
      title: "Toy",
      year: 2003,
      genre: "Komediya",
      collection: "Orta Nəsil Kult",
      director: "Aqil M. Quliyev",
      cast: ["Fərda Xudaverdiyev", "Rəfael İsgəndərov", "Coşqun Rəhimov"],
      description: "Kənddən şəhərə gələn sadəlövh gəncin toy hazırlıqları zamanı düşdüyü gözlənilməz və gülməli vəziyyətlər əks olunur. Dillər əzbəri olan replikaları ilə 2000-ci illərin ən unudulmaz komediyalarından sayılır.",
      sourceUrl: "https://az.wikipedia.org/wiki/Toy_(film,_2005)",
      youtubeUrl: "https://www.youtube.com/watch?v=AYPbGqmDQqk",
      youtubeId: "AYPbGqmDQqk",
      poster: "https://img.youtube.com/vi/AYPbGqmDQqk/hqdefault.jpg",
      isFeatured: false
    },
    {
      id: 13,
      title: "Məhəllə",
      year: 2003,
      genre: "Komediya",
      collection: "Orta Nəsil Kult",
      director: "Aqil M. Quliyev",
      cast: ["Tahir İmanov", "Cabir İmanov", "Rəfael İsgəndərov", "Coşqun Rəhimov", "Kübra Əliyeva"],
      description: "Bakı məhəllələrindən birində yaşayan dostların gündəlik həyatı, məhəllə qaydaları və başlarına gələn komik macəralar göstərilir. Müasir Azərbaycan komediya kinosunun dönüş nöqtəsi hesab edilən kult ekran işidir.",
      sourceUrl: "https://az.wikipedia.org/wiki/M%C9%99h%C9%99ll%C9%99_(film,_2003)",
      youtubeUrl: "https://www.youtube.com/watch?v=raBTovzF4CM",
      youtubeId: "raBTovzF4CM",
      poster: "https://img.youtube.com/vi/raBTovzF4CM/hqdefault.jpg",
      isFeatured: false
    },
    {
      id: 14,
      title: "Məhəllə 2 Moskvada",
      year: 2004,
      genre: "Komediya",
      collection: "Orta Nəsil Kult",
      director: "Aqil M. Quliyev",
      cast: ["Tahir İmanov", "Cabir İmanov", "Rəfael İsgəndərov", "Coşqun Rəhimov", "Dilarə Əliyeva"],
      description: "Bakıdan Moskvaya iş dalınca gedən məhəllə dostları böyük şəhərin sərt qaydaları ilə qarşılaşaraq bir-birindən gülməli macəralar yaşayırlar. İlk filmin uğurunu davam etdirən ekran əsəri özünəməxsus yumoru ilə seçilir.",
      sourceUrl: "https://az.wikipedia.org/wiki/M%C9%99h%C9%99ll%C9%99_2_Moskvada_(film,_2004)",
      youtubeUrl: "https://www.youtube.com/watch?v=6H5xwnxaViY",
      youtubeId: "6H5xwnxaViY",
      poster: "https://img.youtube.com/vi/6H5xwnxaViY/hqdefault.jpg",
      isFeatured: false
    },
    {
      id: 15,
      title: "Bəxt üzüyü",
      year: 1991,
      genre: "Komediya",
      collection: "Orta Nəsil Kult",
      director: "Ramiz Əzizbəyli",
      cast: ["Afaq Bəşirqızı", "Valeh Kərimov", "Gülşad Baxşıyeva", "Firəngiz Rəhimbəyli"],
      description: "Bağ evində istirahət edən ailənin qızıl üzüyünün itməsi ilə bütün qonşular arasında qarışıqlıq və şübhələr yaranır. Vaqif Səmədoğlunun pyesi əsasında çəkilmiş film Moşu Göyəzənli və Söylü obrazları ilə əfsanəyə çevrilib.",
      sourceUrl: "https://az.wikipedia.org/wiki/B%C9%99xt_%C3%BCz%C3%BCy%C3%BC_(film,_1991)",
      youtubeUrl: "https://www.youtube.com/watch?v=aukYcHwiaaQ",
      youtubeId: "aukYcHwiaaQ",
      poster: "https://img.youtube.com/vi/aukYcHwiaaQ/hqdefault.jpg",
      isFeatured: false
    },
    {
      id: 16,
      title: "Hər şey yaxşılığa doğru",
      year: 1997,
      genre: "Dram",
      collection: "Orta Nəsil Kult",
      director: "Vaqif Mustafayev",
      cast: ["Eldəniz Zeynalov", "Yaşar Nuri", "Cahangir Novruzov"],
      description: "Qarabağ müharibəsi dövründə cəbhədən gələn yanlış tabut xəbəri bir məhəllənin sakinlərini həm kədər, həm də qəribə vəziyyətlə üz-üzə qoyur. Tragikomik üslubda çəkilmiş film beynəlxalq festivallarda mükafatlar qazanıb.",
      sourceUrl: "https://az.wikipedia.org/wiki/H%C9%99r_%C5%9Fey_yax%C5%9F%C4%B1l%C4%B1%C4%9Fa_do%C4%9Fru",
      youtubeUrl: "https://www.youtube.com/watch?v=S3LKpviIzCg",
      youtubeId: "S3LKpviIzCg",
      poster: "https://img.youtube.com/vi/S3LKpviIzCg/hqdefault.jpg",
      isFeatured: false
    },
    {
      id: 17,
      title: "Yuxu",
      year: 2001,
      genre: "Komediya",
      collection: "Orta Nəsil Kult",
      director: "Fikrət Əliyev",
      cast: ["Nəsibə Zeynalova", "Səyavuş Aslan", "İlham Qasımov", "Ayan Mirqasımova"],
      description: "Buzovnada yaşayan gənc Əliabbasın sevgilisinə qovuşmaq cəhdləri və məhəllə sakinlərinin rəngarəng xarakterləri ətrafında hadisələr cərəyan edir. Səmimi yumor və unudulmaz aktyor ansamblı filmi izləyicilərin sevimlisinə çevirib.",
      sourceUrl: "https://az.wikipedia.org/wiki/Yuxu_(film,_2001)",
      youtubeUrl: "https://www.youtube.com/watch?v=-QNxUhrhqk4",
      youtubeId: "-QNxUhrhqk4",
      poster: "https://img.youtube.com/vi/-QNxUhrhqk4/hqdefault.jpg",
      isFeatured: false
    },
    {
      id: 18,
      title: "Məşədi İbad-94",
      year: 2005,
      genre: "Komediya",
      collection: "Orta Nəsil Kult",
      director: "Tahir İmanov",
      cast: ["Tahir İmanov", "Cabir İmanov", "Afaq Bəşirqızı", "Rəfael İsgəndərov"],
      description: "Klassik operettanın süjeti 1990-cı illərin Bakı mühitinə və yeni yaranan biznesmenlər dövrünə uyğunlaşdırılaraq təqdim olunur. Musiqili parodiyalar və dövrün sosial mənzərəsi filmə xüsusi dinamika qatır.",
      sourceUrl: "https://az.wikipedia.org/wiki/M%C9%99%C5%9F%C9%99di_%C4%B0bad-94_(film,_2005)",
      youtubeUrl: "https://www.youtube.com/watch?v=-NmoDYH2w88",
      youtubeId: "-NmoDYH2w88",
      poster: "https://img.youtube.com/vi/-NmoDYH2w88/hqdefault.jpg",
      isFeatured: false
    },
    {
      id: 19,
      title: "Aktrisa",
      year: 2011,
      genre: "Triller",
      collection: "Orta Nəsil Kult",
      director: "Rövşən İsax",
      cast: ["Fuad Poladov", "İlham Hüseynov", "Alesya Kaçer"],
      description: "Tanınmış bankirin müəmmalı qətlindən sonra müstəntiq hadisə yerindəki kiçik detalları birləşdirərək qatilin izini axtarır. Detektiv və psixoloji triller elementləri ilə seçilən film gərgin süjeti ilə diqqət çəkir.",
      sourceUrl: "https://az.wikipedia.org/wiki/Aktrisa_(film,_2011)",
      youtubeUrl: "https://www.youtube.com/results?search_query=Aktrisa+2011+Azerbaycan+filmi",
      youtubeId: "",
      poster: "",
      isFeatured: false
    },
    {
      id: 20,
      title: "İnterpapa",
      year: 2006,
      genre: "Komediya",
      collection: "Xalq Komediyası",
      director: "Namiq Ağayev",
      cast: ["Fərda Xudaverdiyev", "Elməddin Cəfərov", "Arif Quliyev"],
      description: "Gənc tələbələrin müasir texnologiya və gündəlik həyat çətinlikləri fonunda yaşadığı gülməli sərgüzəştlər təsvir olunur. Fərda və Elməddin duetinin ən məşhur erkən dövr komediyalarından biridir.",
      sourceUrl: "https://az.wikipedia.org/wiki/%C4%B0nterpapa_(film,_2006)",
      youtubeUrl: "https://www.youtube.com/watch?v=QNjk8JBQUSc",
      youtubeId: "QNjk8JBQUSc",
      poster: "https://img.youtube.com/vi/QNjk8JBQUSc/hqdefault.jpg",
      isFeatured: false
    },
    {
      id: 21,
      title: "Xoxan",
      year: 2014,
      genre: "Komediya",
      collection: "Xalq Komediyası",
      director: "Zaur Mirzəzadə",
      cast: ["Fərda Xudaverdiyev", "Elməddin Cəfərov", "Nigar İbrahimova"],
      description: "Varlı bir iş adamının qızının içinə cin girdiyini öyrənən iki dost bu vəziyyətdən pul qazanmaq üçün özlərini ruh çıxaran mütəxəssis kimi təqdim edirlər. Qorxu və komediyanı birləşdirən film kinoteatrlarda böyük maraqla qarşılanıb.",
      sourceUrl: "https://az.wikipedia.org/wiki/Xoxan_(film,_2014)",
      youtubeUrl: "https://www.youtube.com/watch?v=c35SrhWgang",
      youtubeId: "c35SrhWgang",
      poster: "https://img.youtube.com/vi/c35SrhWgang/hqdefault.jpg",
      isFeatured: false
    },
    {
      id: 22,
      title: "Oğlan evi: Azərbaycansayağı qarət",
      year: 2015,
      genre: "Komediya",
      collection: "Xalq Komediyası",
      director: "İlham Qasımov",
      cast: ["Fərda Xudaverdiyev", "Elməddin Cəfərov", "İslam Mehrəliyev"],
      description: "Eyni evin bir neçə nəfərə satıldığını öyrənən üç zərərçəkmiş pullarını geri almaq üçün dələduz iş adamının oğlunun toyunda plan qururlar. Dinamik ssenarisi və kəskin yumoru ilə kassa rekordları qıran komediyalardandır.",
      sourceUrl: "https://az.wikipedia.org/wiki/O%C4%9Flan_evi:_Az%C9%99rbaycansaya%C4%9F%C4%B1_qar%C9%99t",
      youtubeUrl: "https://www.youtube.com/watch?v=AXdky86R3PQ",
      youtubeId: "AXdky86R3PQ",
      poster: "https://img.youtube.com/vi/AXdky86R3PQ/hqdefault.jpg",
      isFeatured: false
    },
    {
      id: 23,
      title: "Ölülər XXI əsr",
      year: 2016,
      genre: "Komediya",
      collection: "Xalq Komediyası",
      director: "Şuşa",
      cast: ["Tahir İmanov", "Fərda Xudaverdiyev", "Valeh Kərimov", "Dilarə Əliyeva"],
      description: "Cəlil Məmmədquluzadənin ölməz əsərinin motivləri əsasında müasir dövrdəki fırıldaqçılar və sadəlövh insanların hekayəsi satirik dillə canlandırılır. Keçmişlə bu gün arasında körpü quran film kəskin sosial mesajlar verir.",
      sourceUrl: "https://az.wikipedia.org/wiki/%C3%96l%C3%BCl%C9%99r_XXI_%C9%99sr_(film,_2016)",
      youtubeUrl: "https://www.youtube.com/watch?v=fASt1-eAiIU",
      youtubeId: "fASt1-eAiIU",
      poster: "https://img.youtube.com/vi/fASt1-eAiIU/hqdefault.jpg",
      isFeatured: false
    },
    {
      id: 24,
      title: "My Name is İntiqam",
      year: 2014,
      genre: "Komediya",
      collection: "Xalq Komediyası",
      director: "Emil Abdullayev",
      cast: ["Müşviq Şahverdiyev", "İlkin Misgərli", "Ənvər Abbasov"],
      description: "Kənddə yaşayan sadəlövh İntiqam gözlənilmədən böyük məbləğdə pul əldə etdikdən sonra Bakıya gələrək tamamilə fərqli bir həyata başlayır. Filmdə kənd və şəhər mədəniyyətinin toqquşması gülməli situasiyalarla göstərilir.",
      sourceUrl: "https://az.wikipedia.org/wiki/My_Name_is_%C4%B0ntiqam",
      youtubeUrl: "https://www.youtube.com/watch?v=DQK_yERbdeE",
      youtubeId: "DQK_yERbdeE",
      poster: "https://img.youtube.com/vi/DQK_yERbdeE/hqdefault.jpg",
      isFeatured: false
    },
    {
      id: 25,
      title: "Niyə?",
      year: 2017,
      genre: "Komediya",
      collection: "Xalq Komediyası",
      director: "Xəyyam Abdullayev",
      cast: ["Fərda Xudaverdiyev", "Müşviq Şahverdiyev", "İslam Mehrəliyev"],
      description: "Ailə həyatındakı anlaşılmazlıqlar və maddi sıxıntılar ucbatından çıxılmaz vəziyyətə düşən dostlar problemləri həll etmək üçün ağlasığmaz yollara əl atırlar. Aktyorların improvizasiyaları filmə bol gülüş qatır.",
      sourceUrl: "https://www.youtube.com/watch?v=61ESAa0SHpM",
      youtubeUrl: "https://www.youtube.com/watch?v=61ESAa0SHpM",
      youtubeId: "61ESAa0SHpM",
      poster: "https://img.youtube.com/vi/61ESAa0SHpM/hqdefault.jpg",
      isFeatured: false
    },
    {
      id: 26,
      title: "Axırıncı yol",
      year: 2016,
      genre: "Komediya",
      collection: "Xalq Komediyası",
      director: "Emil Abdullayev",
      cast: ["Elşən Orucov", "İlkin Həsəni", "Ramil Babayev", "Nicat Rəhimov"],
      description: "Bozbash Pictures qəhrəmanları təsadüfən banka borclu qaldıqları üçün dəyərli bir əşyanı ölkənin bir başından digər başına çatdırmalı olurlar. Yol boyu onları izləyən mafiya və polislər macəranı daha da qızışdırır.",
      sourceUrl: "https://az.wikipedia.org/wiki/Ax%C4%B1r%C4%B1nc%C4%B1_yol_(film,_2016)",
      youtubeUrl: "https://www.youtube.com/watch?v=3AoAvdHlbWk",
      youtubeId: "3AoAvdHlbWk",
      poster: "https://img.youtube.com/vi/3AoAvdHlbWk/hqdefault.jpg",
      isFeatured: false
    },
    {
      id: 27,
      title: "Stalinin başı",
      year: 2017,
      genre: "Komediya",
      collection: "Xalq Komediyası",
      director: "Emil Abdullayev",
      cast: ["İlkin Həsəni", "Elşən Orucov", "Ramil Babayev", "Nicat Rəhimov"],
      description: "Həbsxanadan azadlığa çıxan qəhrəmanlar gizlədilmiş böyük xəzinənin yerini tapmaq üçün ipuclarının arxasınca düşürlər. Macəra dolu səyahət zamanı dostların başına gələn gülməli hadisələr izləyiciləri əyləndirir.",
      sourceUrl: "https://az.wikipedia.org/wiki/Stalinin_ba%C5%9F%C4%B1_(film,_2017)",
      youtubeUrl: "https://www.youtube.com/watch?v=LJGiWpvwfFE",
      youtubeId: "LJGiWpvwfFE",
      poster: "https://img.youtube.com/vi/LJGiWpvwfFE/hqdefault.jpg",
      isFeatured: false
    },
    {
      id: 28,
      title: "Kəklikotu",
      year: 2017,
      genre: "Komediya",
      collection: "Xalq Komediyası",
      director: "Cəfər Axundzadə, Vüqar İslamzadə",
      cast: ["Müşviq Şahverdiyev", "İslam Mehrəliyev", "Fərda Xudaverdiyev", "Nigar Camal"],
      description: "Rayondan Bakıya meyvə-tərəvəz satmağa gələn əmi və qardaşı oğlu səhvən başqasına məxsus bağlamanı götürərək təhlükəli adamların hədəfinə çevrilirlər. Sürətli hadisələr və rəngarəng personajlar filmi baxımlı edir.",
      sourceUrl: "https://az.wikipedia.org/wiki/K%C9%99klikotu_(film,_2017)",
      youtubeUrl: "https://www.youtube.com/watch?v=HdpG-d4J4bo",
      youtubeId: "HdpG-d4J4bo",
      poster: "https://img.youtube.com/vi/HdpG-d4J4bo/hqdefault.jpg",
      isFeatured: false
    },
    {
      id: 29,
      title: "Zəhər tuluğu",
      year: 2021,
      genre: "Dram",
      collection: "Yeni Dalğa",
      director: "Orxan Mərdan, Taleh Yüzbəyov",
      cast: ["Taleh Yüzbəyov", "Ləman Mərrih", "Nəsibə Eldarova"],
      description: "Cəmiyyətdəki haqsızlıqlara sərt və kobud reaksiyalar verən Adilin daxili tənhalığı və həyatını dəyişən bir qadınla tanışlığı əks olunur. Populyar YouTube layihəsindən tammetrajlı filmə çevrilən ekran əsəri dərin emosional təsir bağışlayır.",
      sourceUrl: "https://az.wikipedia.org/wiki/Z%C9%99h%C9%99r_tulu%C4%9Fu_(film,_2021)",
      youtubeUrl: "https://www.youtube.com/watch?v=elm0QXqeC88",
      youtubeId: "elm0QXqeC88",
      poster: "https://img.youtube.com/vi/elm0QXqeC88/hqdefault.jpg",
      isFeatured: true
    },
    {
      id: 30,
      title: "Bəlkə də...",
      year: 2025,
      genre: "Fantastika",
      collection: "Yeni Dalğa",
      director: "Taleh Yüzbəyov",
      cast: ["Taleh Yüzbəyov", "Əlixan Rəcəbov", "Günay Əhməd"],
      description: "Keçmişdəki səhvlərini düzəltmək və həyatındakı itkiləri geri qaytarmaq şansı qazanan qəhrəmanın zamanla mübarizəsi göstərilir. Fantastika və dram janrlarını birləşdirən film müasir Azərbaycan kinosunda yeni nəfəs kimi qarşılanıb.",
      sourceUrl: "https://www.youtube.com/watch?v=n8KySm_cQKw",
      youtubeUrl: "https://www.youtube.com/watch?v=n8KySm_cQKw",
      youtubeId: "n8KySm_cQKw",
      poster: "https://img.youtube.com/vi/n8KySm_cQKw/hqdefault.jpg",
      isFeatured: false
    },
    {
      id: 31,
      title: "Səriyyə",
      year: 2024,
      genre: "Dram",
      collection: "Yeni Dalğa",
      director: "Əlixan Rəcəbov",
      cast: ["Əlixan Rəcəbov", "Rəvanə Məmmədrzayeva"],
      description: "Ailə dəyərləri, cəmiyyət təzyiqi və fərdi azadlıq arasında sıxılıb qalan gənc bir qadının həyat mübarizəsindən bəhs edir. Realist təsvir tərzi və təsirli aktyor ifaları ilə geniş tamaşaçı kütləsinin rəğbətini qazanıb.",
      sourceUrl: "https://az.wikipedia.org/wiki/%C6%8Flixan_R%C9%99c%C9%99bov",
      youtubeUrl: "https://www.youtube.com/results?search_query=S%C9%99riyy%C9%99+tam+film+%C6%8Flixan+R%C9%99c%C9%99bov",
      youtubeId: "",
      poster: "",
      isFeatured: false
    },
    {
      id: 32,
      title: "Zona",
      year: 2022,
      genre: "Komediya",
      collection: "Yeni Dalğa",
      director: "Cəfər Axundzadə",
      cast: ["Taleh Yüzbəyov", "Əlixan Rəcəbov", "Ağakərim Səmədzadə", "Elşən Orucov"],
      description: "Təsadüfən həbsxanaya düşən iki fərqli xarakterli gəncin oradakı qanunlara uyğunlaşmaq və azadlığa çıxmaq cəhdləri gülməli dillə təqdim olunur. Gənc nəsil komediya aktyorlarını bir araya gətirən dinamik ekran işidir.",
      sourceUrl: "https://az.wikipedia.org/wiki/Zona_(film,_2022)",
      youtubeUrl: "https://www.youtube.com/watch?v=ZBt26xvM4Zw",
      youtubeId: "ZBt26xvM4Zw",
      poster: "https://img.youtube.com/vi/ZBt26xvM4Zw/hqdefault.jpg",
      isFeatured: false
    },
    {
      id: 33,
      title: "Sonuncu şam yeməyi",
      year: 2022,
      genre: "Qısametrajlı",
      collection: "Yeni Dalğa",
      director: "Əlixan Rəcəbov",
      cast: ["Əlixan Rəcəbov", "İbrahim Çingiz"],
      description: "Bir masa arxasında toplanan insanların illər boyu gizlətdiyi sirlərin və riyakarlığın axşam yeməyi boyunca üzə çıxması göstərilir. Kəskin dialoqları və gözlənilməz sonluğu ilə seçilən qısametrajlı dram-satiradır.",
      sourceUrl: "https://www.youtube.com/watch?v=tyTyLjfzBZk",
      youtubeUrl: "https://www.youtube.com/watch?v=tyTyLjfzBZk",
      youtubeId: "tyTyLjfzBZk",
      poster: "https://img.youtube.com/vi/tyTyLjfzBZk/hqdefault.jpg",
      isFeatured: false
    },
    {
      id: 34,
      title: "Faberje",
      year: 2021,
      genre: "Qısametrajlı",
      collection: "Yeni Dalğa",
      director: "Əlixan Rəcəbov",
      cast: ["Əlixan Rəcəbov", "Taleh Yüzbəyov"],
      description: "Dəyərli antikvar əşyanın ələ keçirilməsi ətrafında qurulan planın gözlənilməz təsadüflər ucbatından alt-üst olması təsvir edilir. Yüksək tempi və kriminal-komediya üslubu ilə YouTube-da milyonlarla baxış toplayıb.",
      sourceUrl: "https://www.youtube.com/watch?v=pXOKJuR8ZgA",
      youtubeUrl: "https://www.youtube.com/watch?v=pXOKJuR8ZgA",
      youtubeId: "pXOKJuR8ZgA",
      poster: "https://img.youtube.com/vi/pXOKJuR8ZgA/hqdefault.jpg",
      isFeatured: false
    },
    {
      id: 35,
      title: "Luger",
      year: 2020,
      genre: "Triller",
      collection: "Yeni Dalğa",
      director: "Əlixan Rəcəbov",
      cast: ["Əlixan Rəcəbov", "Elvin Əhmədov"],
      description: "Əlinə qədim tapança keçən sadə bir gəncin həyatının bir neçə saat ərzində necə təhlükəli məcraya yönəldiyi göstərilir. Gərgin atmosferi və operator işi ilə gənc müstəqil kinematoqrafiyanın uğurlu nümunələrindəndir.",
      sourceUrl: "https://www.youtube.com/watch?v=14wcp6Q1_5c",
      youtubeUrl: "https://www.youtube.com/watch?v=14wcp6Q1_5c",
      youtubeId: "14wcp6Q1_5c",
      poster: "https://img.youtube.com/vi/14wcp6Q1_5c/hqdefault.jpg",
      isFeatured: false
    },
    {
      id: 36,
      title: "Baş daşı",
      year: 2025,
      genre: "Qısametrajlı",
      collection: "Yeni Dalğa",
      director: "Əlixan Rəcəbov",
      cast: ["Əlixan Rəcəbov", "Rüstəm Cəbrayılov"],
      description: "Qəbiristanlıq ətrafında baş verən qəribə bir sifarişin insan təbiətindəki tamahkarlıq və qorxuları necə üzə çıxardığı qara yumorla danışılır. Minimalist məkanda qurulan güclü dramaturgiyası ilə izləyicini son ana qədər intizarda saxlayır.",
      sourceUrl: "https://www.youtube.com/watch?v=SkuNeR0S9bY",
      youtubeUrl: "https://www.youtube.com/watch?v=SkuNeR0S9bY",
      youtubeId: "SkuNeR0S9bY",
      poster: "https://img.youtube.com/vi/SkuNeR0S9bY/hqdefault.jpg",
      isFeatured: false
    }
  ];

  let films = EMBEDDED_FILMS;
  let currentActiveFilm = null;
  let currentSearchQuery = '';
  let currentSelectedGenre = 'all';

  // ==========================================================================
  // 2. DOM ELEMENTLƏRİ
  // ==========================================================================
  const searchInput = document.getElementById('searchInput');
  const searchWrapper = document.getElementById('searchWrapper');
  const searchClearBtn = document.getElementById('searchClearBtn');
  const genreSelect = document.getElementById('genreSelect');
  const genrePillsContainer = document.getElementById('genrePillsContainer');
  const btnResetFilters = document.getElementById('btnResetFilters');
  const noResultsBlock = document.getElementById('noResultsBlock');
  
  // Hero Elements
  const heroBanner = document.getElementById('heroBanner');
  const heroBackdropImg = document.getElementById('heroBackdropImg');
  const heroTitle = document.getElementById('heroTitle');
  const heroYear = document.getElementById('heroYear');
  const heroGenre = document.getElementById('heroGenre');
  const heroCollection = document.getElementById('heroCollection');
  const heroDesc = document.getElementById('heroDesc');
  const btnHeroWatch = document.getElementById('btnHeroWatch');
  const btnHeroToggleList = document.getElementById('btnHeroToggleList');
  const btnHeroToggleListText = document.getElementById('btnHeroToggleListText');

  // Random Pick Elements
  const btnRandomPick = document.getElementById('btnRandomPick');
  const randomPickModalOverlay = document.getElementById('randomPickModalOverlay');
  const btnCloseRandom = document.getElementById('btnCloseRandom');
  const randomPosterImg = document.getElementById('randomPosterImg');
  const randomFilmTitle = document.getElementById('randomFilmTitle');
  const randomFilmYear = document.getElementById('randomFilmYear');
  const randomFilmGenre = document.getElementById('randomFilmGenre');
  const btnRandomDetails = document.getElementById('btnRandomDetails');
  const btnRandomAgain = document.getElementById('btnRandomAgain');
  let currentRandomFilm = null;

  // Siyahım Quick Navigation & Clear
  const btnMyListNav = document.getElementById('btnMyListNav');
  const myListBadge = document.getElementById('myListBadge');
  const btnClearMyList = document.getElementById('btnClearMyList');

  // Grids and Section Counts
  const gridMyList = document.getElementById('grid-my-list');
  const gridAllFilms = document.getElementById('grid-all-films');
  const gridClassics = document.getElementById('grid-classics');
  const gridFolkComedy = document.getElementById('grid-folk-comedy');
  const gridNewWave = document.getElementById('grid-new-wave');

  const countMyList = document.getElementById('count-my-list');
  const countAllFilms = document.getElementById('count-all-films');
  const countClassics = document.getElementById('count-classics');
  const countFolkComedy = document.getElementById('count-folk-comedy');
  const countNewWave = document.getElementById('count-new-wave');

  // Film Detail Modal Elements
  const filmDetailModal = document.getElementById('filmDetailModal');
  const btnCloseModal = document.getElementById('btnCloseModal');
  const modalVideoWrapper = document.getElementById('modalVideoWrapper');
  const modalFilmTitle = document.getElementById('modalFilmTitle');
  const modalFilmYear = document.getElementById('modalFilmYear');
  const modalFilmGenre = document.getElementById('modalFilmGenre');
  const modalFilmCollection = document.getElementById('modalFilmCollection');
  const modalFilmDesc = document.getElementById('modalFilmDesc');
  const modalFilmDirector = document.getElementById('modalFilmDirector');
  const modalFilmCast = document.getElementById('modalFilmCast');
  const btnModalToggleList = document.getElementById('btnModalToggleList');
  const btnModalToggleListText = document.getElementById('btnModalToggleListText');
  const modalSourceLink = document.getElementById('modalSourceLink');
  const modalYoutubeDirectLink = document.getElementById('modalYoutubeDirectLink');

  // Toast
  const toastNotification = document.getElementById('toastNotification');
  const toastMessage = document.getElementById('toastMessage');
  let toastTimeout = null;

  // ==========================================================================
  // 3. ŞƏXSİ SİYAHI (LOCALSTORAGE) İDARƏETMƏSİ
  // ==========================================================================
  function getMyList() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) return [];
      const parsed = JSON.parse(stored);
      return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      console.warn('LocalStorage oxunarkən xəta:', e);
      return [];
    }
  }

  function saveMyList(ids) {
    try {
      const uniqueIds = Array.from(new Set(ids));
      localStorage.setItem(STORAGE_KEY, JSON.stringify(uniqueIds));
      updateListUI();
    } catch (e) {
      console.error('LocalStorage saxlanarkən xəta:', e);
    }
  }

  function isInMyList(filmId) {
    const list = getMyList();
    return list.includes(filmId);
  }

  function toggleMyList(filmId) {
    const list = getMyList();
    const film = films.find(f => f.id === filmId);
    const filmTitle = film ? film.title : 'Film';
    let added = false;

    if (list.includes(filmId)) {
      const updated = list.filter(id => id !== filmId);
      saveMyList(updated);
      showToast(`"${filmTitle}" siyahınızdan çıxarıldı`);
      added = false;
    } else {
      list.push(filmId);
      saveMyList(list);
      showToast(`"${filmTitle}" siyahınıza əlavə edildi!`);
      added = true;
    }

    renderAllSections();
    return added;
  }

  function clearMyList() {
    if (confirm('Bütün seçilmiş filmləri siyahınızdan silmək istədiyinizə əminsiniz?')) {
      saveMyList([]);
      showToast('Siyahınız tamamilə təmizləndi');
      renderAllSections();
    }
  }

  function updateListUI() {
    const list = getMyList();
    const count = list.length;
    
    // Update badge
    if (myListBadge) {
      myListBadge.textContent = count;
      myListBadge.style.display = count > 0 ? 'inline-flex' : 'none';
    }

    // Update Clear Button Visibility
    if (btnClearMyList) {
      btnClearMyList.style.display = count > 0 ? 'inline-block' : 'none';
    }

    // Update Hero list button if current hero film is active
    const featuredFilm = films.find(f => f.isFeatured) || films[0];
    if (featuredFilm && btnHeroToggleList) {
      const inHeroList = isInMyList(featuredFilm.id);
      if (inHeroList) {
        btnHeroToggleList.classList.add('in-list');
        btnHeroToggleListText.textContent = '✓ Siyahımda';
      } else {
        btnHeroToggleList.classList.remove('in-list');
        btnHeroToggleListText.textContent = '+ Siyahıma əlavə et';
      }
    }

    // Update Modal list button if open
    if (currentActiveFilm && btnModalToggleList) {
      const inModalList = isInMyList(currentActiveFilm.id);
      if (inModalList) {
        btnModalToggleList.classList.add('in-list');
        btnModalToggleListText.textContent = '✓ Siyahımdan çıxar';
      } else {
        btnModalToggleList.classList.remove('in-list');
        btnModalToggleListText.textContent = '+ Siyahıma əlavə et';
      }
    }
  }

  // Toast bildirişi göstər
  function showToast(msg) {
    if (toastTimeout) clearTimeout(toastTimeout);
    toastMessage.textContent = msg;
    toastNotification.classList.add('show');
    toastTimeout = setTimeout(() => {
      toastNotification.classList.remove('show');
    }, 3200);
  }

  // ==========================================================================
  // 4. AĞILLI POSTER SİSTEMİ (SMART POSTER FALLBACK)
  // ==========================================================================
  // Şəkil yüklənmədikdə və ya poster boş olduqda zərif SVG/HTML neytral poster təqdim olunur
  function createNeutralPosterHTML(film) {
    const safeTitle = escapeHTML(film.title);
    const safeYear = film.year;
    const safeGenre = escapeHTML(film.genre);

    return `
      <div class="neutral-poster-fallback">
        <svg class="neutral-poster-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-8v-2h8v2zm0-4h-8v-2h8v2zm0-4h-8V7h8v2z"/>
        </svg>
        <div class="neutral-poster-content">
          <h4 class="neutral-poster-title">${safeTitle}</h4>
          <div class="neutral-poster-meta">
            <span>${safeYear}</span>
            <span>•</span>
            <span>${safeGenre}</span>
          </div>
        </div>
        <div class="neutral-watermark">AZFILM</div>
      </div>
    `;
  }

  // ==========================================================================
  // 5. FİLM KARTI YARATMAQ (RENDER CARD)
  // ==========================================================================
  function createFilmCard(film) {
    const card = document.createElement('article');
    card.className = 'film-card';
    card.setAttribute('data-id', film.id);
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `${film.title} filminə bax`);

    const inList = isInMyList(film.id);
    const hasValidPoster = film.poster && film.poster.trim() !== '';

    let posterInnerHtml = '';
    if (hasValidPoster) {
      posterInnerHtml = `
        <img 
          class="card-poster-img" 
          src="${film.poster}" 
          alt="${escapeHTML(film.title)} posteri"
          loading="lazy"
        />
        <div class="card-poster-overlay"></div>
      `;
    } else {
      posterInnerHtml = createNeutralPosterHTML(film);
    }

    card.innerHTML = `
      <div class="card-poster-wrapper">
        ${posterInnerHtml}

        <!-- Quick Toggle My List Button -->
        <div class="card-top-actions">
          <button 
            type="button" 
            class="btn-card-toggle-list ${inList ? 'in-list' : ''}" 
            data-toggle-id="${film.id}" 
            title="${inList ? 'Siyahımdan çıxar' : 'Siyahıma əlavə et'}"
            aria-label="${inList ? 'Siyahımdan çıxar' : 'Siyahıma əlavə et'}"
          >
            <svg viewBox="0 0 24 24" fill="${inList ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2.2">
              ${inList ? '<path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>' : '<path d="M12 5v14M5 12h14"></path>'}
            </svg>
          </button>
        </div>

        <!-- Play overlay on card hover -->
        <div class="card-play-hover">
          <div class="card-play-icon">
            <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          </div>
        </div>
      </div>

      <div class="card-body">
        <div class="card-header-row">
          <h3 class="card-title" title="${escapeHTML(film.title)}">${escapeHTML(film.title)}</h3>
          <span class="card-year">${film.year}</span>
        </div>
        <div class="card-meta-row">
          <span class="card-genre-tag">${escapeHTML(film.genre)}</span>
          <span class="card-detail-hint">
            Ətraflı
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </span>
        </div>
      </div>
    `;

    // Handle poster load failure automatically with fallback
    const imgEl = card.querySelector('.card-poster-img');
    if (imgEl) {
      imgEl.addEventListener('error', function () {
        const wrapper = card.querySelector('.card-poster-wrapper');
        if (wrapper) {
          // Replace broken image with smart neutral poster
          imgEl.remove();
          const overlay = wrapper.querySelector('.card-poster-overlay');
          if (overlay) overlay.remove();
          wrapper.insertAdjacentHTML('afterbegin', createNeutralPosterHTML(film));
        }
      });
    }

    // Toggle list button inside card
    const toggleBtn = card.querySelector('.btn-card-toggle-list');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', function (e) {
        e.stopPropagation(); // prevent modal opening
        toggleMyList(film.id);
      });
    }

    // Card click opens modal
    card.addEventListener('click', function () {
      openFilmModal(film.id);
    });

    // Keyboard navigation (Enter / Space)
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openFilmModal(film.id);
      }
    });

    return card;
  }

  // ==========================================================================
  // 6. FİLTİRLƏMƏ VƏ BÖLMƏLƏRİN RENDRİ (FILTERING & RENDERING)
  // ==========================================================================
  function filterFilms(filmList) {
    const query = currentSearchQuery.trim().toLocaleLowerCase('az');
    const genre = currentSelectedGenre;

    return filmList.filter(film => {
      // Search by partial title (case-insensitive)
      const matchesSearch = query === '' || 
        film.title.toLocaleLowerCase('az').includes(query);

      // Genre filter
      const matchesGenre = genre === 'all' || film.genre === genre;

      return matchesSearch && matchesGenre;
    });
  }

  function renderAllSections() {
    const myListIds = getMyList();
    const myListFilms = films.filter(f => myListIds.includes(f.id));

    // Filter each collection based on search and genre
    const filteredMyList = filterFilms(myListFilms);
    const filteredAll = filterFilms(films);
    const filteredClassics = filterFilms(films.filter(f => f.year < 1991));
    const filteredFolk = filterFilms(films.filter(f => f.collection === 'Xalq Komediyası'));
    const filteredNewWave = filterFilms(films.filter(f => f.collection === 'Yeni Dalğa'));

    // Check if any matching films exist at all
    const hasAnyResults = filteredAll.length > 0;
    if (!hasAnyResults) {
      noResultsBlock.classList.add('show');
    } else {
      noResultsBlock.classList.remove('show');
    }

    // 1. Render Siyahım
    gridMyList.innerHTML = '';
    if (myListFilms.length === 0) {
      // Empty State
      gridMyList.innerHTML = `
        <div class="empty-list-card">
          <div class="empty-list-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"/>
            </svg>
          </div>
          <h3 class="empty-list-title">Şəxsi film siyahınız hələ boşdur</h3>
          <p class="empty-list-desc">
            Bəyəndiyiniz Azərbaycan filmlərinin kartlarındakı <strong>"+"</strong> düyməsinə klikləyərək onları şəxsi kolleksiyanıza toplaya və istədiyiniz vaxt buradan baxa bilərsiniz.
          </p>
        </div>
      `;
      countMyList.textContent = `(0)`;
    } else if (filteredMyList.length === 0) {
      gridMyList.innerHTML = `
        <div class="empty-list-card" style="padding: 2rem;">
          <p class="empty-list-desc">Seçilmiş filtrlərə uyğun siyahınızda film tapılmadı.</p>
        </div>
      `;
      countMyList.textContent = `(0 / ${myListFilms.length})`;
    } else {
      filteredMyList.forEach(film => {
        gridMyList.appendChild(createFilmCard(film));
      });
      countMyList.textContent = `(${filteredMyList.length})`;
    }

    // 2. Render Azərbaycan Kinosu (Bütün Filmlər)
    gridAllFilms.innerHTML = '';
    filteredAll.forEach(film => {
      gridAllFilms.appendChild(createFilmCard(film));
    });
    countAllFilms.textContent = `(${filteredAll.length} film)`;

    // 3. Render Klassiklər (year < 1991)
    gridClassics.innerHTML = '';
    filteredClassics.forEach(film => {
      gridClassics.appendChild(createFilmCard(film));
    });
    countClassics.textContent = `(${filteredClassics.length})`;

    // 4. Render Xalq Komediyası
    gridFolkComedy.innerHTML = '';
    filteredFolk.forEach(film => {
      gridFolkComedy.appendChild(createFilmCard(film));
    });
    countFolkComedy.textContent = `(${filteredFolk.length})`;

    // 5. Render Yeni Dalğa
    gridNewWave.innerHTML = '';
    filteredNewWave.forEach(film => {
      gridNewWave.appendChild(createFilmCard(film));
    });
    countNewWave.textContent = `(${filteredNewWave.length})`;
  }

  // ==========================================================================
  // 7. HERO VITRIN BLOKU
  // ==========================================================================
  function initHeroBanner() {
    const featuredFilm = films.find(f => f.isFeatured) || films[0];
    if (!featuredFilm) return;

    heroTitle.textContent = featuredFilm.title;
    heroYear.textContent = featuredFilm.year;
    heroGenre.textContent = featuredFilm.genre;
    heroCollection.textContent = featuredFilm.collection;
    heroDesc.textContent = featuredFilm.description;

    if (featuredFilm.poster) {
      heroBackdropImg.src = featuredFilm.poster;
      heroBackdropImg.alt = `${featuredFilm.title} vitrini`;
    }

    btnHeroWatch.onclick = () => openFilmModal(featuredFilm.id);

    btnHeroToggleList.onclick = () => {
      toggleMyList(featuredFilm.id);
    };

    updateListUI();
  }

  // ==========================================================================
  // 8. TƏSADÜFİ FİLM SEÇİCİ ("MƏNƏ FİLM SEÇ")
  // ==========================================================================
  function pickRandomFilm() {
    // Tələb: Cari seçilmiş janra uyğun təsadüfi film seçsin ("Bütün janrlar" seçilibsə bütün kataloqdan).
    // Axtarış mətnindən asılı OLMASIN!
    let pool = films;
    if (currentSelectedGenre !== 'all') {
      pool = films.filter(f => f.genre === currentSelectedGenre);
    }

    if (pool.length === 0) {
      showToast(`"${currentSelectedGenre}" janrında heç bir film tapılmadı.`);
      return;
    }

    const randomIndex = Math.floor(Math.random() * pool.length);
    const chosen = pool[randomIndex];
    currentRandomFilm = chosen;

    // Populate Random Modal
    randomFilmTitle.textContent = chosen.title;
    randomFilmYear.textContent = chosen.year;
    randomFilmGenre.textContent = chosen.genre;

    if (chosen.poster && chosen.poster.trim() !== '') {
      randomPosterImg.src = chosen.poster;
      randomPosterImg.style.display = 'block';
    } else {
      randomPosterImg.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="160" height="90"><rect width="100%" height="100%" fill="%231F1F28"/><text x="50%" y="50%" fill="%23FFFFFF" dominant-baseline="middle" text-anchor="middle" font-size="12">YerliFlix</text></svg>';
    }

    randomPickModalOverlay.classList.add('active');
    document.body.classList.add('modal-open');
  }

  function closeRandomModal() {
    randomPickModalOverlay.classList.remove('active');
    if (!filmDetailModal.classList.contains('active')) {
      document.body.classList.remove('modal-open');
    }
  }

  // ==========================================================================
  // 9. SƏHİFƏDAXİLİ DETALLI MODAL VƏ YOUTUBE IFRAME İDARƏETMƏSİ (ÇOX VACİB!)
  // ==========================================================================
  function openFilmModal(filmId) {
    const film = films.find(f => f.id === filmId);
    if (!film) return;

    currentActiveFilm = film;

    // Fill metadata
    modalFilmTitle.textContent = film.title;
    modalFilmYear.textContent = film.year;
    modalFilmGenre.textContent = film.genre;
    modalFilmCollection.textContent = film.collection;
    modalFilmDesc.textContent = film.description;
    modalFilmDirector.textContent = film.director;

    // Cast pills
    modalFilmCast.innerHTML = '';
    if (Array.isArray(film.cast)) {
      film.cast.forEach(actor => {
        const pill = document.createElement('span');
        pill.className = 'cast-pill';
        pill.textContent = actor;
        modalFilmCast.appendChild(pill);
      });
    }

    // Source link (Vikipediya)
    if (film.sourceUrl) {
      modalSourceLink.href = film.sourceUrl;
      modalSourceLink.style.display = 'inline-flex';
    } else {
      modalSourceLink.style.display = 'none';
    }

    // Direct YouTube link
    if (film.youtubeUrl) {
      modalYoutubeDirectLink.href = film.youtubeUrl;
      modalYoutubeDirectLink.style.display = 'inline-flex';
    } else {
      modalYoutubeDirectLink.style.display = 'none';
    }

    // YouTube iframe or Smart Fallback
    modalVideoWrapper.innerHTML = '';
    if (film.youtubeId && film.youtubeId.trim() !== '') {
      // 16:9 YouTube iframe player with full controls & autoplay
      const iframe = document.createElement('iframe');
      iframe.className = 'modal-youtube-iframe';
      iframe.src = `https://www.youtube.com/embed/${film.youtubeId}?autoplay=1&rel=0&controls=1&fs=1`;
      iframe.title = `${film.title} filmini izlə`;
      iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen');
      iframe.setAttribute('allowfullscreen', 'true');
      iframe.setAttribute('controls', '1');
      modalVideoWrapper.appendChild(iframe);
    } else {
      // Fallback view when youtubeId is empty (e.g., Aktrisa, Səriyyə)
      const fallbackDiv = document.createElement('div');
      fallbackDiv.className = 'modal-video-fallback';
      fallbackDiv.innerHTML = `
        <div class="modal-video-fallback-content">
          <div class="fallback-video-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
            </svg>
          </div>
          <h3 class="fallback-video-title">YouTube Birbaşa Pleyer Tapılmadı</h3>
          <p class="fallback-video-desc">Bu film üçün qapalı embed lisenziyası və ya rəsmi link xarici axtarış tələb edir. Filmi YouTube-da axtarış vasitəsilə dərhal izləyə bilərsiniz.</p>
          <a href="${film.youtubeUrl}" target="_blank" rel="noopener noreferrer" class="btn-youtube-search-fallback">
            YouTube-da axtar və izlə
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </a>
        </div>
      `;
      modalVideoWrapper.appendChild(fallbackDiv);
    }

    // Modal My List Button
    updateListUI();
    btnModalToggleList.onclick = () => {
      toggleMyList(film.id);
    };

    // Open Modal and lock scroll
    filmDetailModal.classList.add('active');
    document.body.classList.add('modal-open');
  }

  function closeFilmModal() {
    // Stop video immediately by wiping iframe src and clearing wrapper
    modalVideoWrapper.innerHTML = '';
    filmDetailModal.classList.remove('active');
    currentActiveFilm = null;

    if (!randomPickModalOverlay.classList.contains('active')) {
      document.body.classList.remove('modal-open');
    }
  }

  // ==========================================================================
  // 10. HADİSƏ DİNLƏYİCİLƏRİ (EVENT LISTENERS)
  // ==========================================================================
  function setupEventListeners() {
    // 1. Live Instant Search
    searchInput.addEventListener('input', function (e) {
      currentSearchQuery = e.target.value;
      if (currentSearchQuery.length > 0) {
        searchWrapper.classList.add('has-text');
      } else {
        searchWrapper.classList.remove('has-text');
      }
      renderAllSections();
    });

    searchClearBtn.addEventListener('click', function () {
      searchInput.value = '';
      currentSearchQuery = '';
      searchWrapper.classList.remove('has-text');
      searchInput.focus();
      renderAllSections();
    });

    // 2. Genre Dropdown Select
    genreSelect.addEventListener('change', function (e) {
      setGenreFilter(e.target.value);
    });

    // 3. Genre Pills (Horizontal Bar)
    genrePillsContainer.addEventListener('click', function (e) {
      const pill = e.target.closest('.genre-pill');
      if (pill) {
        const genre = pill.getAttribute('data-genre');
        setGenreFilter(genre);
      }
    });

    function setGenreFilter(genre) {
      currentSelectedGenre = genre;
      genreSelect.value = genre;

      // Update pills active state
      const pills = genrePillsContainer.querySelectorAll('.genre-pill');
      pills.forEach(p => {
        if (p.getAttribute('data-genre') === genre) {
          p.classList.add('active');
          // Scroll pill smoothly into view on mobile
          p.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        } else {
          p.classList.remove('active');
        }
      });

      renderAllSections();
    }

    // 4. Reset Filters Button
    btnResetFilters.addEventListener('click', function () {
      searchInput.value = '';
      currentSearchQuery = '';
      searchWrapper.classList.remove('has-text');
      setGenreFilter('all');
    });

    // 5. Random Pick Button
    btnRandomPick.addEventListener('click', function () {
      pickRandomFilm();
    });

    btnCloseRandom.addEventListener('click', function () {
      closeRandomModal();
    });

    btnRandomAgain.addEventListener('click', function () {
      pickRandomFilm();
    });

    btnRandomDetails.addEventListener('click', function () {
      if (currentRandomFilm) {
        closeRandomModal();
        openFilmModal(currentRandomFilm.id);
      }
    });

    // Close Random Modal when clicking overlay backdrop
    randomPickModalOverlay.addEventListener('click', function (e) {
      if (e.target === randomPickModalOverlay) {
        closeRandomModal();
      }
    });

    // 6. Film Detail Modal Close Listeners
    btnCloseModal.addEventListener('click', function () {
      closeFilmModal();
    });

    // Close Detail Modal when clicking overlay backdrop
    filmDetailModal.addEventListener('click', function (e) {
      if (e.target === filmDetailModal) {
        closeFilmModal();
      }
    });

    // 7. Global Keyboard Listeners (Esc to close any active modal)
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' || e.key === 'Esc') {
        if (filmDetailModal.classList.contains('active')) {
          closeFilmModal();
        } else if (randomPickModalOverlay.classList.contains('active')) {
          closeRandomModal();
        }
      }
    });

    // 8. Clear My List
    btnClearMyList.addEventListener('click', function () {
      clearMyList();
    });

    // Smooth jump for internal navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId && targetId !== '#') {
          const targetEl = document.querySelector(targetId);
          if (targetEl) {
            e.preventDefault();
            targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      });
    });
  }

  // Helper function to escape HTML
  function escapeHTML(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // ==========================================================================
  // 11. BAŞLANĞIC YÜKLƏNMƏ (APP INITIALIZATION)
  // ==========================================================================
  async function initApp() {
    // Try fetching external JSON if available in web server environment
    try {
      const response = await fetch('azerbaycan_filmleri_36.json');
      if (response.ok) {
        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
          films = data;
        }
      }
    } catch (e) {
      // In local file:/// environment, fetch is often blocked by browser CORS policy.
      // Thanks to EMBEDDED_FILMS, the app runs 100% smoothly without any errors!
      console.log('YerliFlix: Daxili kino məlumatları ilə aktivləşdirildi.');
    }

    initHeroBanner();
    renderAllSections();
    setupEventListeners();
    updateListUI();
  }

  // Run on DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }

})();
