/* إعدادات عامة للصفحة الجديدة */
body {
    margin: 0;
    font-family: "Tahoma", sans-serif;
    line-height: 1.6;
    background-color: #f9f9f9; /* خلفية مختلفة */
    color: #333;
}

/* شريط التنقل */
nav {
    background-color: #0077b6; /* أزرق فاتح */
    padding: 15px;
}

nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
}

nav ul li {
    margin: 0 10px;
}

nav ul li a {
    text-decoration: none;
    color: white;
    padding: 10px 15px;
    font-size: 18px;
    transition: background-color 0.3s, color 0.3s;
}

nav ul li a:hover {
    background-color: #023e8a;
    color: #ffdd00; /* لون مختلف عند التمرير */
}

/* الهيدر */
header {
    background-color: #0096c7;
    color: white;
    text-align: center;
    padding: 50px 10px;
}

header h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
}

header p {
    font-size: 1.2rem;
}

/* الأقسام */
section {
    margin: 20px;
    padding: 20px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

section h2 {
    color: #0077b6;
    margin-bottom: 10px;
}

/* الفوتر */
footer {
    text-align: center;
    background-color: #333;
    color: white;
    padding: 10px;
    margin-top: 20px;
}
