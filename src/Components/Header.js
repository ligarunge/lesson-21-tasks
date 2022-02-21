function Header() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="">Catland</a>
                <div class="navbar-nav">
                    <a class="nav-item nav-link active" href="/">Home <span class="sr-only">(current)</span></a>
                    <a class="nav-item nav-link" href="/pictures">Pictures</a>
                    <a class="nav-item nav-link" href="/words">Words</a>
                </div>
            </nav>
        </div>
    )
}
export default Header