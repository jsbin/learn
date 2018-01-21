---
title: Pronounceable URLs
category: learn
---
# Pronounceable URLs

Did you ever notice that that JS Bin's URLs have been designed to be pronounceable?

![/images/url-example.png](/images/url-example.png)

When JS Bin launched in 2009, URLs for bins were only 4 characters (but that
quickly got all used up). Originally URLs consisted of vowel, consonant, vowel,
consonant (*VC*). This would make URLs pronounceable, like 'atay' or 'usap'.

In early 2014 we changed the format so it reads consonant, vowel (*CV*), etc to allow
us to regain 4 character URLs and increase the URL space. *VC* would allow for
66,000 5 character URLs, *CV* allows for **250,000 5 character URLs**.

Here's a 5 letter example:

<script>
function shortcode(length) {
  var vowels = 'aeiou',
      consonants = 'bcdfghjklmnpqrstvwxyz',
      word = '', index = 0, set;

  for (; index < length; index += 1) {
    set = (index % 2 === 0) ? consonants : vowels;
    word += set[Math.floor(Math.random() * set.length)];
  }

  return word;
}

// wrap the numbers in a class to
document.write('<p class="sample"><small>jsbin.com/</small>' + shortcode(5) + '</p>');
</script>

Feel free to say it out loud, and refresh the page to try a new one!