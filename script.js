// إضافة مستمعات للروابط في التنقل
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// إضافة الحدث لجميع الروابط لتفعيل التمرير السلس
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // منع السلوك الافتراضي للرابط

    // الحصول على القسم المستهدف باستخدام href من الرابط الذي تم النقر عليه
    const targetId = link.getAttribute('href').substring(1); // إزالة الـ "#" من href
    const targetSection = document.getElementById(targetId);

    // التمرير إلى القسم المستهدف بسلوك سلس
    targetSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start' // محاذاة القسم مع أعلى الشاشة
    });

    // إغلاق القائمة المنسدلة عند النقر على الرابط
    if (navbar.classList.contains('active')) {
      navbar.classList.remove('active');  // إخفاء القائمة عند النقر على أي رابط
      menuIcon.classList.remove('bx-x');  // إعادة الأيقونة إلى شكل القائمة
    }
  });
});

// تصحيح الحدث لإضافة الكلاس sticky في حالة التمرير
let header = document.querySelector('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('sticky', window.scrollY > 100);
});

// ScrollReveal
ScrollReveal({
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-imag', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// التعامل مع قائمة الـ menu (القائمة المنسدلة)
let menuIcon = document.querySelector('#menu-icons');
let navbar = document.querySelector('.navbar');

// عند النقر على الأيقونة لفتح/إغلاق القائمة
menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');  // تبديل الأيقونة إلى شكل "X"
  navbar.classList.toggle('active');  // إظهار/إخفاء القائمة
};


// typed js//

const options = {
  strings: ["Back End Developer", "Front End Developer"],
  typeSpeed: 100,   // سرعة الكتابة
  backSpeed: 100,   // سرعة المسح
  backDelay: 1000,  // التأخير بعد المسح
  startDelay: 500,  // التأخير قبل البدء بالكتابة
  loop: true        // إعادة الكتابة بعد الانتهاء
};

const typed = new Typed(".multiple-text", options);




//(function() {
//  emailjs.init('JDGn5kL1eMFWh994H'); // تأكد من أن الـ User ID صحيح
//})();

//document.getElementById('form').addEventListener('submit', function(event) {
  //event.preventDefault(); // يمنع إرسال النموذج بالطريقة التقليدية

  // جمع بيانات النموذج
  //var formData = new FormData(this);

  // عرض البيانات في Console لمراجعتها
 // for (var [key, value] of formData.entries()) {
      //console.log(key + ': ' + value); // تسجيل البيانات في الكونسول
 // }

  // إرسال البريد الإلكتروني عبر EmailJS
 // emailjs.sendForm('service_8nrc0gb', 'template_n0owyka', formData)
   //   .then(function(response) {
       //   console.log('Response:', response); // تسجيل الاستجابة
    //      alert('Message sent successfully!');
   //   }, function(error) {
   //       console.log('Error:', error); // تسجيل الخطأ
      //    alert('Failed to send message. Please try again.');
   //   });
//});