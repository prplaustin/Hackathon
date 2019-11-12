/// <reference types="Cypress" />

context('Login test', () => {

    it ('Checking header', () => {
        cy.visit('https://demo.applitools.com/hackathon.html')
        cy.eyesOpen({
          appName: 'Hackathon',
          batchName: 'Hackathon',
          testName: 'Button Test',
        })
        cy.eyesCheckWindow('Login screen')
        cy.get('.auth-header').should('have.text', '\n        Login Form\n      ')
    })
    it ('Checking user icon', () => {
      cy.get(':nth-child(1) > .pre-icon').should('be.visible')
    })
    it ('Checking password icon', () => {
      cy.get(':nth-child(2) > .pre-icon').should('be.visible')
    })
    it ('Checking form inputs', () => {
      cy.get('.form-check-input').should('be.visible').click()
      cy.get('.form-check-label').should('be.visible').click()
    })
    it ('Checking login button and twitter', () => {
      cy.get('#log-in').should('be.visible')  
      cy.get('[style="display: inline-block; margin-bottom:4px;"] > img').should('be.visible').click()
    })
    it ('Checking facbook', () => {
      cy.get(':nth-child(2) > img').should('be.visible').click()
    })
    it ('Checking linkedin ', () => {
      cy.get(':nth-child(3) > img').should('be.visible').click()
    })
    it ('Checking top logo', () => {
      cy.get('.logo-w > a > img').should('be.visible')
    })
    it ('Checking username and login text', () => {

      cy.get(':nth-child(1) > label').should('have.text', 'Username')
      cy.get('form > :nth-child(2) > label').should('have.text', 'Password')
    })
      it ('Checking user placeholder', () => {
      cy.get('#username').invoke('attr', 'placeholder').should('contain', 'Enter your username')
      })

      it ('Checking password placeholder', () => {
      cy.get('#password').invoke('attr', 'placeholder').should('contain', 'Enter your password')
    })

    it ('Blank login and click', () => {
  
      cy.visit('https://demo.applitools.com/hackathon.html')
      cy.get('#log-in').click()  
      cy.eyesCheckWindow('Click login');
    // should be an error
    })
    it ('Username and click', () => {
      cy.get('#username').type('random text')
      cy.get('#log-in').click()   
      cy.eyesCheckWindow('Username + login');

      // should be an error
  })
  it ('Password and click', () => {
    cy.get('#username').clear()
    cy.get('#password').type('random text')
    cy.get('#log-in').click() 
    cy.eyesCheckWindow('Password + login');

    //should be an error  
})
it ('Username and Password and click', () => {
    cy.get('#username').type('random text')
    cy.get('#password').type('random text')
    cy.get('#log-in').click()  
    cy.eyesCheckWindow('Username, password + login');

    //should log in
})
it ('Check table)', () => {
    cy.get('#amount').click()
    cy.get(':nth-child(1) > .text-right > .text-danger').should('contain', '320')
    cy.eyesCheckWindow('Check sort by amount');

    //data should stay in tact
})
it ('Expenses)', () => {
    cy.get('#showExpensesChart').click()
    cy.wait(200)
    //note 2017 and 2018 data
    cy.eyesCheckWindow('Compare 2017 and 2018');
    cy.get('#addDataset').click()
    cy.wait(300)
    cy.eyesCheckWindow('2019 should be added');
    //2019 should appear
})

it ('Dynamic Ad Test)', () => {
cy.visit('https://demo.applitools.com/hackathon.html?showAd=true')
cy.get('#username').type('a')
cy.get('#password').type('a')
cy.get('#log-in').click()
cy.wait(100)
cy.get('#flashSale > img').should('exist')
cy.get('#flashSale2 > img').should('exist')
cy.eyesCheckWindow('Two gifs present?');
cy.eyesClose()    
})

})  
context('Login test', () => {
    it ('Checking header', () => {
        cy.eyesOpen({
            appName: 'Hackathon',
            batchName: 'Hackathon',
            testName: 'Button Test',
          })
      cy.visit('https://demo.applitools.com/hackathonV2.html')
      cy.eyesCheckWindow('Login screen')
      cy.get('.auth-header').should('have.text', '\n        Login Form\n      ')
    })
    it ('Checking user icon', () => {
      cy.get(':nth-child(1) > .pre-icon').should('be.visible')
    })
    it ('Checking password icon', () => {
      cy.get(':nth-child(2) > .pre-icon').should('be.visible')
    })
    it ('Checking form inputs', () => {
      cy.get('.form-check-input').should('be.visible').click()
      cy.get('.form-check-label').should('be.visible').click()
    })
    it ('Checking login button and twitter', () => {
      cy.get('#log-in').should('be.visible')  
      cy.get('[style="display: inline-block; margin-bottom:4px;"] > img').should('be.visible').click()
    })
    it ('Checking facbook', () => {
      cy.get(':nth-child(2) > img').should('be.visible').click()
    })
    it ('Checking linkedin ', () => {
      cy.get(':nth-child(3) > img').should('be.visible').click()
    })
    it ('Checking top logo', () => {
      cy.get('.logo-w > a > img').should('be.visible')
    })
    it ('Checking username and login text', () => {

      cy.get(':nth-child(1) > label').should('have.text', 'Username')
      cy.get('form > :nth-child(2) > label').should('have.text', 'Password')
    })
      it ('Checking user placeholder', () => {
      cy.get('#username').invoke('attr', 'placeholder').should('contain', 'Enter your username')
      })

      it ('Checking password placeholder', () => {
      cy.get('#password').invoke('attr', 'placeholder').should('contain', 'Enter your password')
    })

    it ('Blank login and click', () => {
  
      cy.visit('https://demo.applitools.com/hackathonV2.html')
      cy.get('#log-in').click()  
      cy.eyesCheckWindow('Click login');
    // should be an error
    })
    it ('Username and click', () => {
      cy.get('#username').type('random text')
      cy.get('#log-in').click()
      cy.eyesCheckWindow('Username + login');
   
      // should be an error
  })
  it ('Password and click', () => {
    cy.get('#username').clear()
    cy.get('#password').type('random text')
    cy.get('#log-in').click() 
    cy.eyesCheckWindow('Password + login');

    //should be an error  
})
it ('Username and Password and click', () => {
    cy.get('#username').type('random text')
    cy.get('#password').type('random text')
    cy.get('#log-in').click()  
    cy.eyesCheckWindow('Username, password + login');
    //should log in
})
it ('Check table image)', () => {
    cy.eyesCheckWindow('Check sort by amount');
})
it ('Check table)', () => {
    cy.get('#amount').click()
    cy.get(':nth-child(1) > .text-right > .text-danger').should('contain', '320')
//data should stay in tact
})
it ('Expenses)', () => {
    cy.get('#showExpensesChart').click()
    cy.wait(200)
    //note 2017 and 2018 data
    cy.eyesCheckWindow('Compare 2017 and 2018');
    cy.get('#addDataset').click()
    cy.wait(300)
    cy.eyesCheckWindow('2019 should be added');
    //2019 should be added
})
it ('Dynamic Ad Test)', () => {
cy.visit('https://demo.applitools.com/hackathonV2.html?showAd=true')
cy.get('#username').type('a')
cy.get('#password').type('a')
cy.get('#log-in').click()
cy.wait(100)
cy.eyesCheckWindow('Two gifs present?');
})
it ('first ad', () => {
    cy.get('#flashSale > img').should('exist')
    })
    it ('second ad', () => {
    cy.get('#flashSale2 > img').should('exist')
    cy.eyesClose()
    })

})  