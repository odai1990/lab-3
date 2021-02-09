var age = (18 == parseInt(prompt("please insert your age", "Your age must be greater than 18 or equal")))
while (!age) {
    age = (18 == parseInt(prompt("please insert your age", "Your age must be greater than 18 or equal")))

}

if (age) {
    document.write(`<header>
<nav >

<ul>
<li><a onclick = "return check()" href="https://ahmad-arman.github.io/traning-lab-03/">Software</a></li>

<li><a onclick = "return check()" href="https://marwanreyadal-khawaldeh.github.io/Demo/">Showroom Car</a></li>
<li><a href="#">Building</a></li>


</ul>

</nav>

</header>


<main>


<h1>DK For Contracing</h1>
<img class="logo" src="assets/download.jpg" alt="logo" />

<p>
we can every work contracting finishing work, mantinaince work, structure build 
we can every work contracting finishing work, mantinaince work, structure build 
we can every work contracting finishing work, mantinaince work, structure build 
we can every work contracting finishing work, mantinaince work, structure build 
we can every work contracting finishing work, mantinaince work, structure build 

</p>

${addImages()}

</main>

<footer>
&copy; DK For Contracing 2021
</footer>
`)
}
