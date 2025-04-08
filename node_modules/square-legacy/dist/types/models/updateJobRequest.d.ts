import { Schema } from '../schema';
import { Job } from './job';
/** Represents an [UpdateJob]($e/Team/UpdateJob) request. */
export interface UpdateJobRequest {
    /**
     * Represents a job that can be assigned to [team members]($m/TeamMember). This object defines the
     * job's title and tip eligibility. Compensation is defined in a [job assignment]($m/JobAssignment)
     * in a team member's wage setting.
     */
    job: Job;
}
export declare const updateJobRequestSchema: Schema<UpdateJobRequest>;
