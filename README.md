# DALL-E Client

This project is a Python client for the DALL-E API. DALL-E is a machine learning model developed by OpenAI that can generate images from textual descriptions. This client allows you to generate images using the DALL-E API.

## Installation

1. Make sure you have Python 3.x installed on your computer.
2. Clone this repository using the following command:

   ```
   git clone <https://github.com/your-username/dalle-client.git>
   ```

3. Install the required dependencies by running the following command:

   ```
   pip install -r requirements.txt
   ```

## Usage

To use the client, simply run the `dalle_client.py` file with the command line arguments:

```
python dalle_client.py --text "an armchair in the shape of an avocado"

```

The client will generate an image based on the textual description and save it to the `output.png` file in the current directory.

## Advanced options

The client has several advanced options that you can use to customize the image generation process. These options include:

- `-size`: The size of the output image in pixels. The default value is 512.
- `-num-layers`: The number of layers in the DALL-E model. The default value is 32.
- `-num-tokens`: The number of tokens in the DALL-E model. The default value is 8192.

Feel free to modify these options according to your requirements.

## Disclaimer

This client is not an official product of OpenAI and is not affiliated with OpenAI in any way. Use it at your own risk.
