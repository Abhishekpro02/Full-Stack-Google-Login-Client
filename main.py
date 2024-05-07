from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time
import csv

# Open the browser and go to the website
driver = webdriver.Chrome()
base_url = 'https://web.whatsapp.com'
driver.get(base_url)

# Wait for the user to scan the QR code
# input('Press Enter after scanning the QR code')
# time.sleep(10)

with open('contacts.csv', 'r') as file:
    reader = csv.reader(file)
    contacts = list(reader)
    # print(contacts)
    for phone,msg in contacts:
        print(phone,msg)
        phonenum = phone
        message = msg
        sameTab = (base_url + '/send?phone=' + str(phonenum))
        driver.get(sameTab)
        time.sleep(8)
        content=driver.switch_to.active_element
        content.send_keys(message)
        content.send_keys(Keys.RETURN)
        time.sleep(8)
    
# Close the browser
driver.quit()
print('Finished sending messages')