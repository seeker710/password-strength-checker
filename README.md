<h1>Password Strength Checker</h1>

<h2>Password Entropy</h2>
<p>
  Password Entropy is the measure of password strength or how strong the given password is. It is a measure of effectiveness of a password against guessing or brute-force attacks. It decides whether the entered password is common and easily crack-able or not.
</p>
<h2>Password entropy formula</h2>
<p>
  It is calculated by knowing character set (lower alphabets, upper alphabets, numbers, symbols, etc.) used and the length of the created password. It is expressed in terms of bits of entropy per character.
<p>
<p align='center'><em>E = L * log2(R)<em></p>
where:
<ul>
<li>
  <em>E</em> - <strong>Entropy of password</strong>,
</li>
<li>
  <em>L</em> - <strong>Size of the pool</strong> of unique characters from which we build the password; and
</li>
<li>
  <em>R</em> - <strong>Password length</strong>, i.e., the number of characters in the password.
</li>
<br>
<table>
  <tr>
    <th>Pool</th><th>Elements</th><th>Pool Size</th>
  </tr>
  <tr>
    <td>Digits</td><td>0-9</td><td>10</td>
  </tr>
  <tr>
    <td>Lower case Latin letters</td><td>a-z</td><td>26</td>
  </tr>
  <tr>
    <td>Upper case Latin letters</td><td>A-Z</td><td>26</td>
  </tr>
  <tr>
    <td>Latin letters</td><td>a-z, A-Z</td><td>52</td>
  </tr>
  <tr>
    <td>Alphanumeric</td><td>a-z, 0-9</td><td>36</td>
  </tr>
  <tr>
    <td>Alphanumeric & Upper Case</td><td>a-z, A-Z, 0-9</td><td>36</td>
  </tr>
  <tr>
    <td>Special symbols (typical U.S. keyboard)</td><td>`~!@#$%^&*()-=_+[{]}\|;':",.<>/?</td><td>32</td>
  </tr>
</table>
<p>
  To determine the pool size for your password, go through the table above. If your password contains at least one character from a given category, then mark this category.<br>
  Then add the sizes of categories that you've marked. For example:
</p>
<ul>
  <li>The password incorrect has a pool of 26 characters (lower case letters);</li>
  <li>Changing the password to Incorrect would increase the pool to 52 characters (lower case and upper case letters);</li>
  <li>Changing it further to IncoRRect77 would increase the pool to 62 characters (lower case, upper case letters, numbers); and</li>
  <li>Finally, IncoRRect77$%& has the pool of 26 + 26 + 10 + 32 = 94 characters (lower case, upper case letters, numbers, and special symbols).</li>
</ul><br>
<p>
  The other quantity you need to know to compute your password's entropy is the <strong>password length</strong>. Nothing complicated here, you just need to count the characters. Continuing our example, both <em>incorrect</em> and <em>Incorrect</em> have 9 characters, <em>IncoRRect77</em> has 11 characters, and <em>Incorrect77$%&</em> has 14 characters.
</p>
<h2>Possible duration to crack password</h2>
<p>The estimated duration of cracking a password based on entropy is expressed as:<p>
<p align='center'><em>Duration = 2<sup>(entropy)</sup>/number of guesses per second</em></p>
<p>
  <strong>The number of guesses per second</strong> depends on various factors such as processor speed, software used as well as available wordlist. In this project, number of guesses per second is considered to be <em>1,000,000 passwords per second</em>.
</p>
<h2>Output</h2>
<h3>Desktop version:</h3>
![image](https://user-images.githubusercontent.com/115873710/201053372-5ad7867b-cd4f-46b9-a020-6aa4b9dc2e3b.png)
<h3>Mobile version:</h3>
![image](https://user-images.githubusercontent.com/115873710/201053870-4020c793-3f48-4128-8576-407936b6fedd.png)
