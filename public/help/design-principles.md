# JS Bin design principles

These are emerging from the ongoing process of designing and building JS Bin. They’re a work in progress.

- **Visitors to jsbin.com get a cursor**  
  Nothing obscures the tool – start typing to begin a bin.
- **Support learning**
- **Streaming by default**
- **Anonymous first**  
  Avoid requiring login
- **Open first**  
  Design and development happens in public, unless there’s a good reason to go private.
- **Respect ex-users**  
  Don’t break links to their stuff.
  Never make public things they set as private.
- **Return is as it was left**  
  When people return to an application or document, they expect it to be as they left it.
- **Assert failure to communicate, not the lack of a network**  
  An app can’t truly know that there’s no network and people care more about the risk of data loss than the status of their network. This principle came from a discussion in [offlinefirst](https://github.com/offlinefirst/research/issues/10#issuecomment-34654691).
