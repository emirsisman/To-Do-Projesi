# TODO Uygulaması (React + Vite + Bootstrap)

Bu proje, frontend eğitiminde verilen **TODO App** ödevine göre hazırlanmış basit bir görev yönetimi uygulamasıdır. Modern bir Javascript kütüphanesi olan **React + Vite** ve stil için **Bootstrap CSS** kullanılmıştır.

## Proje Yapısı

- `index.html`  
  - React, ReactDOM ve Bootstrap CSS üzerinden eklenmiştir.   
- Bileşenler (index.html içindeki React kodunda):
  - `App` – Ana Layout
  - `ToDoPage` – TODO listesi sayfası
  - `ToDoForm`, `ToDoList`, `ToDoItem` – Görev ekleme, listeleme, güncelleme ve silme bileşenleri

## Ödev Yönergesi ile Eşleşme

- **Modern Javascript kütüphanesi**: React + Vite kullanıldı.  
- **Klasör yapısı**: Proje geliştirilirken `Components`, `Pages` klasörleri kullanılmış, sonrasında Netlify dağıtımı için kod tek HTML dosyasında birleştirilmiştir.  
- **Stil kütüphanesi**: Bootstrap CSS kullanıldı.  
- **TODO fonksiyonları**:
  - Görev **ekleme** (`ToDoForm`)
  - Görev **listeleme** (`ToDoList`)
  - Görev **güncelleme / düzenleme** (`ToDoItem` içinde düzenleme modu)
  - Görev **silme** (`Sil` butonu)
  - Tamamlanan görev sayısı gösterimi

## Çalıştırma

Yerel olarak projeyi çalıştırmak için:

1. `To-Do-Projesi` klasörünü bilgisayarınıza indirin (veya klonlayın).  
2. `index.html` dosyasına çift tıklayın veya herhangi bir statik sunucu ile açın.  
3. Tarayıcıda **TODO App** arayüzü açılacaktır.

## GitHub ve Netlify Dağıtımı

- **GitHub**  
  - Yeni bir public repository oluşturun.  
  - `To-Do-Projesi` klasörünün içeriğini reponun kök dizinine kopyalayın.  
  - `index.html` ve bu `README.md` dosyasını commit edip push’layın.

- **Netlify**  
  - `To-Do-Projesi` klasörünü zipleyin (içinde `index.html` bulunmalı).  
  - Netlify hesabınızda **Deploy manually → Drag & drop** ile zip dosyasını yükleyin.  
  - Oluşan URL’yi ödev teslim formuna ekleyin.



