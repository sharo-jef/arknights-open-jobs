<script lang="ts">
  import { browser } from '$app/environment';
  import { base } from '$app/paths';

  const routes = [
    { path: `${base ? `${base}/` : '/'}`, name: 'Top', id: 'nav-0' },
    { path: `${base}/public-recruitment`, name: '公開求人ツール', id: 'nav-1' },
  ];

  let selected = browser && routes.find(route => window.location.pathname.match(new RegExp(route.path === `${base}/` ? `^${route.path}?$` : `^${route.path}/?$`)))?.id;
  const changeComponent = (event: MouseEvent) => {
    selected = (event.target as HTMLButtonElement).id;
  };
</script>

<nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark" aria-label="Main navigation">
  <div class="container-fluid">
    <a class="navbar-brand" href="{base}/">Arknights Tools</a>
    <button class="navbar-toggler p-0 border-0" type="button" data-bs-toggle="offcanvas" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        {#each routes as route}
        <li class="nav-item">
          <a class="nav-link {selected !== void 0 && selected === route.id ? 'active' : ''}" aria-current="page" href="{route.path}" on:click={changeComponent} id={route.id}>{route.name}</a>
        </li>
        {/each}
        <!-- <li class="nav-item">
          <a class="nav-link" href="#">Profile</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Switch account</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">Settings</a>
          <ul class="dropdown-menu" aria-labelledby="dropdown01">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> -->
      </ul>
      <!-- <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> -->
    </div>
  </div>
</nav>
