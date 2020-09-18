function main() {
    console.log("hello")
    $("ul").on("click", ".shopping-item-toggle", function (event) {
        console.log("check button", this)
        $(this).parent().parent().find('.shopping-item').toggleClass("shopping-item__checked")
    })
    $("ul").on("click", ".shopping-item-delete", function (event) {
        console.log("delete button", this)
        $(this).parent().parent().remove()
    })
    $("body").on("submit", "#js-shopping-list-form", function (event) {
        console.log("shopping form")
        event.preventDefault()
        const val=$('#shopping-list-entry').val()
        $("ul").append(`
        <li>
        <span class="shopping-item">${val}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>
        `)
    })
}
$(main) 