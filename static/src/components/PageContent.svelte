<script>
	import CreditUnion from './CreditUnion.svelte';
	import Menu from './Menu.svelte';
	let title = '금융정보 알리미';
</script>

<div class="d-flex" id="wrapper">
	<!-- Sidebar-->
	<div class="border-end bg-white" id="sidebar-wrapper">
		<div class="sidebar-heading border-bottom bg-light">{title}</div>
		<Menu />
	</div>
	<!-- Page content wrapper-->
	<div id="page-content-wrapper">
		<!-- Top navigation-->
		<nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
			<div class="container-fluid">
				<button class="btn btn-primary" id="sidebarToggle">메뉴 토글</button>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav ms-auto mt-2 mt-lg-0">
						<!-- <li class="nav-item active"><a class="nav-link" href="#!">Home</a></li>
						<li class="nav-item"><a class="nav-link" href="#!">Link</a></li>
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
							<div class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
								<a class="dropdown-item" href="#!">Action</a>
								<a class="dropdown-item" href="#!">Another action</a>
								<div class="dropdown-divider"></div>
								<a class="dropdown-item" href="#!">Something else here</a>
							</div>
						</li> -->
					</ul>
				</div>
			</div>
		</nav>
		<CreditUnion />
	</div>
</div>