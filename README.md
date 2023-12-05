# State hospital
Small project made to study hybrid architecture between a client side react pages with django as server

## setup 
- make sure to have Dode and Python3 installed
- create a python sub-environment
- run `npm install` and `pip install -r requiremnts`
- run webpack in a separate terminal `npm run dev`
- run Django migrations `python -m manage migrate`
- download the dataset Hospital_General_Information.csv from https://www.kaggle.com/datasets/thedevastator/hospitals-in-the-united-states-a-comprehensive-d
- populate database with the custom command `python -m manage import_hospitals --path data/Hospital_General_Information.csv`
- start Django with `python -m manage runserver`