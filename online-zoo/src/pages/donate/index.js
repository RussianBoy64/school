import styles from '../../scss/index.scss'

const amountInput = document.querySelector('input[type="number"]')

amountInput.addEventListener('keyup', function () {
  if (this.value.length > 4) {
    this.value = this.value.slice(0, 4)
  }
})
