
import "../App.css";

const Navbar = () => (
	<nav style={{
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		padding: "1rem 2rem",
		background: "#282c34",
		color: "white"
	}}>
		<div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>Suburbana CODE SAS</div>
		<div>
			<a href="#inicio" style={{ color: "white", marginRight: "1rem", textDecoration: "none" }}>Inicio</a>
			<a href="#servicios" style={{ color: "white", marginRight: "1rem", textDecoration: "none" }}>Servicios</a>
			<a href="#contacto" style={{ color: "white", textDecoration: "none" }}>Contacto</a>
		</div>
	</nav>
);

const Home = () => {
	return (
		<div>
			<Navbar />
			<header style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				height: "60vh",
				background: "#f5f5f5"
			}}>
				<h1>Bienvenido a Suburbana CODE SAS</h1>
				<p>Tu solución en desarrollo web y tecnología.</p>
			</header>
			<section id="servicios" style={{ padding: "2rem" }}>
				<h2>Nuestros Servicios</h2>
				<ul>
					<li>Desarrollo de sitios web</li>
					<li>Aplicaciones a medida</li>
					<li>Consultoría tecnológica</li>
				</ul>
			</section>
			<section id="contacto" style={{ padding: "2rem", background: "#e9ecef" }}>
				<h2>Contacto</h2>
				<p>Escríbenos a <a href="mailto:info@suburbanacode.com">info@suburbanacode.com</a></p>
			</section>
		</div>
	);
};

export default Home;
