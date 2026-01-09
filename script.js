function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function openModal(project) {
  const title = document.getElementById("modal-title");
  const desc = document.getElementById("modal-desc");

  const projects = {
    task: {
      title: "Task Manager App",
      desc: "A task management app using HTML, CSS, and JavaScript with full CRUD functionality."
    },
    chatbot: {
      title: "AI Chatbot – Mitra",
      desc: "An AI-powered chatbot designed to provide intelligent and user-friendly responses."
    },
    email: {
      title: "Email Automation System",
      desc: "Automates sending emails using predefined templates and user inputs."
    },
    student: {
      title: "Student Result Management System",
      desc: "A system to manage and display student academic records dynamically."
    },
    weather: {
      title: "Weather Forecast Web App",
      desc: "Fetches real-time weather data using API and displays it in a clean UI."
    },
    expense: {
      title: "Expense Tracker",
      desc: "Tracks daily expenses with add/delete features using LocalStorage."
    }
  };

  title.innerText = projects[project].title;
  desc.innerText = projects[project].desc;

  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
