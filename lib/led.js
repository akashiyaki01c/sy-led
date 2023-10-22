

class LedDisplay {
    #element = null;
    #inner_element = null;

    constructor(id, imagePath, sizeX, sizeY, offsetX, offsetY, scale) {

        this.id = id || "";
        this.sizeX = sizeX || 0;
        this.sizeY = sizeY || 0;
        this.offsetX = offsetX || 0;
        this.offsetY = offsetY || 0;
        this.scale = scale || 1;

        this.#element = document.getElementById(id);
        this.#element.innerHTML = `
            <div class="led-${id}-outer led-outer" style="width: ${sizeX * scale}px; height: ${sizeY * scale}px;">
                <div id="led-${id}-inner" class="${id}-inner led-inner" style="width: ${sizeX}px; height: ${sizeY}px; transform: scale(${scale});" ></div>
                <div class="ami"></div>
            </div>`;
        this.#element.classList.add("led-root");
        this.#element.style.width = `${sizeX * scale}px`;
        this.#element.style.height = `${sizeY * scale}px`;
        this.#inner_element = document.getElementById(`led-${id}-inner`);
        this.#inner_element.style.backgroundImage = `url(${imagePath})`;
        this.#inner_element.style.backgroundPositionX = `-${offsetX}px`;
        this.#inner_element.style.backgroundPositionY = `-${offsetY}px`;
        this.#inner_element.style.width = `${sizeX}px`;
        this.#inner_element.style.height = `${sizeY}px`;
        this.#inner_element.style.imageRendering = `pixelated`;
    }

    update(x, y) {
        this.#inner_element.style.backgroundPositionX = `-${x * this.sizeX + this.offsetX}px`;
        this.#inner_element.style.backgroundPositionY = `-${y * this.sizeY + this.offsetY}px`;
    }
}