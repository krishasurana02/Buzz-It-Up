# Lense - Filter images

![Lense tab](readme_img\lense.png?raw=true "Lense")


## Running locally for development

This project uses [Yarn](https://yarnpkg.com/en/) for dependencies.

To run it locally, you must install Yarn and run the following command at the repository's root to get all the dependencies.

```bash
npm i yarn
```

Then, you can run

```bash
npm run start
```

You can then browse to `localhost:9966` to view the application.


## Credits

This demo could not have been done without the following:

* Authors of the [arbitrary style transfer](https://arxiv.org/abs/1705.06830) paper.
* The Magenta repository for [arbitrary style transfer](https://github.com/tensorflow/magenta/tree/master/magenta/models/arbitrary_image_stylization).
* Authors of [the MobileNet-v2 paper](https://arxiv.org/abs/1801.04381).
* Authors of the paper describing [neural network knowledge distillation](https://arxiv.org/abs/1503.02531).
* The [TensorFlow.js library](https://js.tensorflow.org).
* [Google Colaboratory](https://colab.research.google.com/), with which I was able 
to do all necessary training using a free(!) GPU.

As a final note, I'd love to hear from people interested 
in making a suite of tools for artistically manipulating images, kind of like 
[Magenta Studio](https://magenta.tensorflow.org/studio)
but for images. Please reach out if you're planning to build/are 
building one out!
