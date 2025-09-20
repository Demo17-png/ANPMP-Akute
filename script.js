const students = [
    { name: "Dr Adams Jacob", facility: "Exodus Medical Center", bio: "1, Adeyi Close, Akute.", photo: "images/drcool.png" },
    { name: "Dr Chinedu Okafor", facility: "Leviticus Specialist Hospital", bio: "2, Nwankwo Street, Ajuwon.", photo: "images/drbruno.jpg" },
    { name: "Dr Fatima Suleiman", facility: "Amad Hospital", bio: "3. Ekundayo Street, Alagbole.", photo: "images/drraliat.jpeg" },
    { name: "Dr Mabel Iwe", facility: "Wellspring Medical Centre", bio: "4, Alagba Crescent, Tipper Garrage.", photo: "images/draminat.png" },
    { name: "Dr Greg Agu", facility: "Gregory Medical Centre", bio: "5, Aliu Street, Jolasco, Akute-Agbado Road .", photo: "images/drgreg.png" },
    { name: "Dr Susan Akinyele", facility: "Dew Hospital", bio: "6, Amole Street, Akute.", photo: "images/drsusan.png" },
    { name: "Dr Beauty Onu", facility: "Eureka Medical Centre", bio: "7, Chukwu Lane, Oke- Aro.", photo: "images/drbeauty.png" },
    { name: "Dr Samuel David", facility: "Delight Speciliast Hospital", bio: "8, Momoh Street, Akute.", photo: "images/drsamuel.png" },
    { name: "Dr Bunmi Idowu", facility: " Awesome Medical Centre", bio: "9, Amoo Street, Olambe.", photo: "images/drbunmi.jpeg" },
    { name: "Dr Seyi Bello", facility: "Bright Hospital", bio: "10, Taju Street, Alagbole.", photo: "images/drbello.png" }
  ];

  function loadYearbook(filtered = students) {
    const container = document.getElementById("yearbook");
    container.innerHTML = "";
    filtered.forEach(student => {
      container.innerHTML += `
        <div class="student-card">
          <img src="${student.photo}" alt="${student.name}">
          <h2>${student.name}</h2>
          <p><strong>Facility:</strong> ${student.facility}</p>
          <p>${student.bio}</p>
        </div>
      `;
    });
  }

  // Initial load
  loadYearbook();

  // Search functionality
  document.getElementById("search").addEventListener("input", function() {
    const keyword = this.value.toLowerCase();
    const filtered = students.filter(s => s.name.toLowerCase().includes(keyword));
    loadYearbook(filtered);
  });
