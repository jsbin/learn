# Writing a blog post

This (private) article outlines useful tips and the process for releasing a blog post.

## Creating the draft post

1. Whilst drafting your post, ensure it lives inside the `public/blog/_drafts` directory, this way it'll be in the git repo, but hidden from the live site. 
2. You *can* work on a separate branch for the blog post, and this will ensure the content doesn't go live, *or* you can commit with `[skip ci]` which will skip the automated deployment process.

## Structure

1. What problem do your readers have? *don't know about how to do stuff (hack, fix, learn, teach, contribute, etc) in JS Bin*
* Why hasn't this problem been solved yet? *resources are either non-existent  scattered around*
* What is now possible? *find everything in one place ask for help*
* How does this make their life better? *by knowing your tools you can better at what you do*
* What should they do now? *go to the help site, subscribe, etc*

## Preparing for publishing

1. Ensure the metadata is present and correct in `public/blog/_data.json`containing `title`, `author` and `date` and move the post in to the `pubic/blog/` directory
* Does the article have an `h1` (note that this does not particularly have to match the metadata?
* Did you spell check the article?
* Are you using consistent punctuation on titles and lists (i.e. ensuring lists all end with a period or not)?
* Ensure any images are included in the `public/images/` directory and have been run through ImageOptim (or similar)
* To ensure the post is deployed commit and push to the github repo (*without the `[skip ci]` command*). Deployment takes about 5 minutes or less