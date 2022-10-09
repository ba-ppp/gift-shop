<script>
import axios from 'axios';
export default{

  data: function () {
    return {
      product: []
    }
  },
  async created() {
    await axios.get('http://localhost:8080/product/getProduct')
    .then((response) => {
      
      this.product = response.data;
      console.log(this.product)
    })
  }
}
</script>