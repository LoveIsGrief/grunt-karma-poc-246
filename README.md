Just a PoC repo to show the problem with grunt-karma's
merging of array in options.

The example in this case is the `exclude` option.

Look at [`karma.yml`] for the task that is run.

# Requirements

 - nodejs

# How to run

```bash
# Install project deps
npm install
# Install the grunt command to run the task runner
npm install -g grunt-cli
# Run the tasks, which should fail
grunt
```
