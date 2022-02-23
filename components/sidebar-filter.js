function sidebar() {
    return `
  <div id="mobile-filter">
    <div>
      <h4 id="burgundy">Refine By</h4>
    </div>
    <div class="py-1 border-bottom ml-3">
      <h6 class="font-weight-bold">Gender</h6>
      <div id="orange"><span class="fa fa-minus"></span></div>
      <form>
        <div class="form-group">
          <input type="checkbox" id="menFilter" />
          <label for="menFilter">Men Styles</label>
        </div>
        <div class="form-group">
          <input type="checkbox" id="womenFilter" />
          <label for="womenFilter">Women Styles</label>
        </div>
        <div class="form-group">
          <input type="checkbox" id="kidsFilter" />
          <label for="kidsFilter">Kids Styles</label>
        </div>
      </form>
    </div>
    <div class="py-2 border-bottom ml-3">
      <h6 class="font-weight-bold">Category</h6>
      <div id="orange"><span class="fa fa-minus"></span></div>
      <form>
        <div class="form-group">
          <input type="checkbox" id="shirtFilter" />
          <label for="shirtFilter">Shirts</label>
        </div>
        <div class="form-group">
          <input type="checkbox" id="tshirtFilter" />
          <label for="tshirtFilter">T-Shirts</label>
        </div>
        <div class="form-group">
          <input type="checkbox" id="jacketFilter" />
          <label for="jacketFilter">Jackets</label>
        </div>
        <div class="form-group">
          <input type="checkbox" id="trouserFilter" />
          <label for="trouserFilter">Trousers</label>
        </div>
        <div class="form-group">
          <input type="checkbox" id="shortsFilter" />
          <label for="shortsFilter">Shorts</label>
        </div>
        <div class="form-group">
          <input type="checkbox" id="topsFilter" />
          <label for="topsFilter">Tops</label>
        </div>
        <div class="form-group">
          <input type="checkbox" id="kurtasFilter" />
          <label for="kurtasFilter">Kurtas</label>
        </div>
        <div class="form-group">
          <input type="checkbox" id="sareeFilter" />
          <label for="sareeFilter">Saree</label>
        </div>
      </form>
    </div>
    <button id="filterButton">Filter</button>
  </div>`;
}


export default sidebar;
