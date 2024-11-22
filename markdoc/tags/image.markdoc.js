import { MyImage } from '../../components/Image';

export default {
  render: MyImage,
  attributes: {
    src: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    width: {
      type: String,
      default: '50%'
    }
  }
};